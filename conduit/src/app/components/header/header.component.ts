import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

}
