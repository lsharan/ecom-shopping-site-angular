import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Deal } from './deal-object-structure';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private mainDealsUrl = 'http://localhost:3001/api/deals/main';
  private primeDealsUrl = 'http://localhost:3001/api/deals/prime';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // Implement a method to get the Main deals
  getMainDeals() {
    return this.http
      .get<Deal[]>(this.mainDealsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to get the Prime deals
  getPrimeDeals() {
    return this.http
      .get<Deal[]>(this.primeDealsUrl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

  //Implement checkout logic
  purchase(item) {
    alert(`You bought the: ${item.name}`);
  }
}
