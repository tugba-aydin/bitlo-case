import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/responses/login.response';
import { OpenOrderResponse } from '../models/responses/oper-order.response';
import { MeResponse } from '../models/responses/me.response';
import { BalanceResponse } from '../models/responses/balance.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.base_api_url + 'auth/';
  headers;
  
  constructor(private httpClient: HttpClient) {
  }

  login(loginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.apiUrl + 'login', loginRequest).pipe(
      catchError(this.handleError)
    );
  }

  openOrders(): Observable<OpenOrderResponse> {
    this.setHeaders();
    return this.httpClient.post<OpenOrderResponse>(this.apiUrl + 'open-orders', null, { 'headers': this.headers })
  }

  me(): Observable<MeResponse> {
    this.setHeaders();
    return this.httpClient.post<MeResponse>(this.apiUrl + 'me', null, { headers: this.headers });
  }

  balances(): Observable<BalanceResponse> {
    this.setHeaders();
    return this.httpClient.post<BalanceResponse>(this.apiUrl + 'balances', null, { headers: this.headers });
  }

  setHeaders(){
    const token = localStorage.getItem('token');
    if(token) this.headers = { 'x-bitlo-auth': token}
    return this.headers;
  }

 handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
