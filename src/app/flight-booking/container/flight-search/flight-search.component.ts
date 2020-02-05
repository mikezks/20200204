import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../services/flight.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;
  basket: object = {
    "3": true,
    "5": false
  };

  flights$ = of([
    {
      id: 500,
      from: 'Brussels',
      to: 'New York',
      date: (new Date()).toISOString(),
      delayed: true
    }
  ],
  [
    {
      id: 1000,
      from: 'Brussels',
      to: 'New York',
      date: (new Date()).toISOString(),
      delayed: true
    }
  ]);

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights$.subscribe(flights => console.log(flights));
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error on loading flights', err)
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
