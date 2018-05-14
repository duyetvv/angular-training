import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public title: string = 'Sign in';
  public email: string = '';
  public password: string = '';
  public username: string = ''

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submitForm() {
    this.userService.register({
      email: this.email,
      username: this.username,
      password: this.password
    }).subscribe(data => {
      this.router.navigate['/'];
    })
  }

}
