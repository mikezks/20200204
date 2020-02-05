import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpClient } from '@angular/common/http';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService,
  //useClass: DummyFlightService,
  deps: [ HttpClient ]
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
