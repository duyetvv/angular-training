import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

import { articles_path } from '../constants';
import { JwtService } from './jwt.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ArticleService {

  constructor(
    private jwtService: JwtService,
    private restApi: RestApiService
  ) { }

  createArticle(article) {
    const token = this.jwtService.getToken();

    return this.restApi.post(
      articles_path,
      { article },
      {Authorization: `Token ${token}`}
    ).pipe(map(data => data))
  }

  getArticles(params) {
    let sign = '';

    const paramsStr = Object.keys(params).reduce((prev, cur) => {
      prev += `${sign}${cur}=${params[cur]}`;
      sign = '&';
      return prev;
    }, '');

    return this.restApi
      .get(`${articles_path}?${paramsStr}`)
      .pipe(map(data => data));
  }
}
