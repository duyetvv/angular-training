import { Component, OnInit } from '@angular/core';

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
  public password: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
