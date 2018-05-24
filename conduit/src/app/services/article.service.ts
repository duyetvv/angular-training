import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

import { articles_path } from '../constants';
import { JwtService } from './jwt.service';
import { map } from 'rxjs/operators/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Article } from '../models';
import { distinctUntilChanged } from 'rxjs/operators';

const params2Str = (params) => {
  return Object.keys(params).map((key) => {
    return `${key}=${params[key]}`;
  }).join('&');
};

@Injectable()
export class ArticleService {
  public articlesFavData = new BehaviorSubject<Article[]>({} as Article[]);
  public articlesFav = this.articlesFavData.asObservable().pipe(distinctUntilChanged());

  constructor(
    private jwtService: JwtService,
    private restApi: RestApiService
  ) { }

  createArticle(article) {
    const token = this.jwtService.getToken();

    return this.restApi.post({
      path: articles_path,
      body: { article },
      opts: {Authorization: `Token ${token}`}
    }).pipe(map(data => data))
  }

  getArticles(params) {
    const paramsStr = params2Str(params);
    const opts = { Authorization: `Token ${this.jwtService.getToken()}` };

    return this.restApi.get({
      path: `${articles_path}?${paramsStr}`,
      opts
    }).pipe(map(data => data));
  }

  favoriteArticle(slug, isFavorite) {
    const method = isFavorite ? 'post' : 'delete';

    return this.restApi[`${method}`]({
      path: `${articles_path}/${slug}/favorite`,
      opts: {Authorization: `Token ${this.jwtService.getToken()}`}
    }).pipe(data => data)
  }
}
