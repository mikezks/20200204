import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    const flights = [
      {
        id: 500,
        from: 'Brussels',
        to: 'New York',
        date: (new Date()).toISOString(),
        delayed: true
      }
    ];

    return of(flights);
  }

}
