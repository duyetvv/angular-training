import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiUrl } from '../constants';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

const defaultOpts = {
  'Content-Type':'application/json; charset=utf-8'
}

const setOptions = (opts) => ({ headers: new HttpHeaders({ ...defaultOpts, ...opts }) })

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }

  get(path: string, opts: any = {}): Observable<any> {
    return this.http.get(`${apiUrl}${path}`, setOptions(opts))
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}, opts: any = {}): Observable<any> {
    return this.http.put(
      `${apiUrl}${path}`,
      JSON.stringify(body),
      setOptions(opts)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, opts:any = {}): Observable<any> {
    return this.http.post(
      `${apiUrl}${path}`,
      JSON.stringify(body),
      setOptions(opts)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}
