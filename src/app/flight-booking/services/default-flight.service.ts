import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultFlightService implements FlightService {
  flights: Flight[] = [];

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { params, headers })
      .pipe(
        tap(flights => this.flights = flights)
      );
  }
}
