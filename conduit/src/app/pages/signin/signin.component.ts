import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public title: string = 'Sign in';
  public email: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submitForm() {
    this.userService.login({
      email: this.email,
      password: this.password
    })
    .subscribe(data => {
      this.router.navigate(['/'])
    })
  }

}
