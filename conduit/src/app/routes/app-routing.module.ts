import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { SigninComponent } from '../pages/signin/signin.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { EditorComponent } from '../pages/editor/editor.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { PostComponent } from '../pages/profile/post/post.component';
import { FavPostComponent } from '../pages/profile/fav-post/fav-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: SigninComponent
  }, {
    path: 'register',
    component: SignupComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: 'editor',
    component: EditorComponent
  }, {
    path: 'profile/:username',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: PostComponent
      }, {
        path: 'favorites',
        component: FavPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
