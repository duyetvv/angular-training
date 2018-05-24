import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { User } from '../models';
import { JwtService } from './jwt.service';
import { RestApiService } from './rest-api.service';
import { authentication, registration, currentUser } from '../constants';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private jwtService: JwtService,
    private restApi: RestApiService
  ) { }

  computed() {
    const token = this.jwtService.getToken();
    if (token) {
      this.restApi.get({
        path: currentUser,
        opts: {Authorization: `Token ${token}`}
      }).subscribe(
        data => this.setAuthed(data.user),
        error => this.purgeAuth()
      )
    } else {
      this.purgeAuth();
    }
  }

  setAuthed(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  login(user) {
    return this.restApi.post({
      path: authentication,
      body: { user }
    }).pipe(map(data => {
      this.setAuthed(data.user);
      return data;
    }));
  }

  register(user) {
    return this.restApi.post({
      path: registration,
      body: { user }
    }).pipe(map(data => {
      this.setAuthed(data.user);
      return data;
    }))
  }

  updateUser(user) {
    const token = this.jwtService.getToken();

    return this.restApi.put({
      path: currentUser,
      body: { user },
      opts: { Authorization: `Token ${token}` }
    }).pipe(map(data => {
      return data;
    }))
  }

}
