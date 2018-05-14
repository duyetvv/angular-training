import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public image: string = '';
  public username: string = '';
  public bio: string = '';
  public email: string = '';

  constructor(
     private router: Router,
     private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(data => {
      const { image, email, bio, username } = data;

      this.image = image;
      this.email = email;
      this.bio = bio;
      this.username = username
    })
  }

  submitForm() {
    this.userService.updateUser({
      email: this.email,
      image: this.image,
      bio: this.bio,
      username: this.username
    }).subscribe(data => {
      this.router.navigate(['/profile', data.user.username]);
    })
  }

  logout() {
    this.router.navigate(['/']);
    this.userService.purgeAuth();
  }

}
