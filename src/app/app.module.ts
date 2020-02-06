import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES),
      CoreModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
