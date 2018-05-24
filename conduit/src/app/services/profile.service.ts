import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Profile } from '../models';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { profiles_path } from '../constants'

@Injectable()
export class ProfileService {

  constructor(private restApi: RestApiService) { }

  get(username: string): Observable<Profile> {
    return this.restApi.get({path: `${profiles_path}/:${username}`})
      .pipe(map((data: {profile: Profile}) => data.profile));
  }

  follow(username: string): Observable<Profile> {
    return this.restApi.post({ path: `${profiles_path}/:${username}/follow`});
  }

  unfollow(username: string): Observable<Profile> {
    return this.restApi.delete({ path: `${profiles_path}/:${username}/follow`});
  }

}
