import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { SlotBookingdetailsComponent } from './slot-bookingdetails/slot-bookingdetails.component';
import { SlotDetailsComponent } from './slot-details/slot-details.component';
import { SlotEmployeeInformationComponent } from './slot-employee-information/slot-employee-information.component';
import { SlotRegistrationComponent } from './slot-registration/slot-registration.component';
import { WalletParkingSearchComponent } from './wallet-parking-search/wallet-parking-search.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailComponent,
    SlotBookingdetailsComponent,
    SlotDetailsComponent,
    SlotEmployeeInformationComponent,
    SlotRegistrationComponent,
    WalletParkingSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
