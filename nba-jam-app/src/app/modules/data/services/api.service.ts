import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.api.base;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers : HttpHeaders;

  constructor(private http: HttpClient) 
  {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append("Authorization", "Basic " + environment.api.auth);
  }

  public Get(endpoint: string) : Observable<any> {

    return this.http
    .get(API_URL + endpoint, {
      headers: this.headers
    })
    .pipe(catchError(this.handleError));
  }

  public Post(endpoint: string, data: any) : Observable<any> {
    return this.http.post(API_URL + endpoint, data)
    .pipe(catchError(this.handleError));
  }

  //handle any error encounted while sending http request
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }
}
