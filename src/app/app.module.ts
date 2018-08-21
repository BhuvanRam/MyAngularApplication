import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { SlotBookingdetailsComponent } from './slot-bookingdetails/slot-bookingdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailComponent,
    SlotBookingdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
