import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CheckAuthedDirective } from './directives/check-authed.directive';
import { RestApiService } from './services/rest-api.service';
import { UserService } from './services/user.service';
import { JwtService } from './services/jwt.service';
import { ArticleService } from './services/article.service';
import { TagService } from './services/tag.service';
import { HoverDirective } from './directives/hover.directive';
import { CheckEmailDirective } from './directives/check-email.directive';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostComponent } from './pages/profile/post/post.component';
import { FavPostComponent } from './pages/profile/fav-post/fav-post.component';
import { EditorComponent } from './pages/editor/editor.component';
import { ProfileService } from './services/profile.service';
import { ArticleComponent } from './components/article/article.component';
import { ArticleMetaComponent } from './components/article-meta/article-meta.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    CheckAuthedDirective,
    HoverDirective,
    CheckEmailDirective,
    SettingsComponent,
    ProfileComponent,
    PostComponent,
    FavPostComponent,
    EditorComponent,
    ArticleComponent,
    ArticleMetaComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestApiService,
    UserService,
    JwtService,
    TagService,
    ArticleService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
