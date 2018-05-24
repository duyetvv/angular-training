import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiUrl } from '../constants';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

const defaultOpts = {
  'Content-Type':'application/json; charset=utf-8'
}

const setOptions = (opts) => ({
  headers: new HttpHeaders({ ...defaultOpts, ...opts })
})

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }

  get(params): Observable<any> {
    const { path, opts = {} } = params;

    return this.http.get(`${apiUrl}${path}`, setOptions(opts))
      .pipe(catchError(this.formatErrors));
  }

  put(params): Observable<any> {
    const { path, body = {}, opts = {} } = params;

    return this.http.put(
      `${apiUrl}${path}`,
      JSON.stringify(body),
      setOptions(opts)
    ).pipe(catchError(this.formatErrors));
  }

  post(params): Observable<any> {
    const { path, body = {}, opts = {} } = params;

    return this.http.post(
      `${apiUrl}${path}`,
      JSON.stringify(body),
      setOptions(opts)
    ).pipe(catchError(this.formatErrors));
  }

  delete(params): Observable<any> {
    const { path, opts = {} } = params;

    return this.http.delete(
      `${apiUrl}${path}`,
      setOptions(opts)
    ).pipe(catchError(this.formatErrors));
  }

}
