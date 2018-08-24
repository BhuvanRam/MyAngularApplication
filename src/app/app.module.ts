import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { SlotBookingdetailsComponent } from './slot-bookingdetails/slot-bookingdetails.component';
import { SlotDetailsComponent } from './slot-details/slot-details.component';
import { SlotEmployeeInformationComponent } from './slot-employee-information/slot-employee-information.component';
import { SlotRegistrationComponent } from './slot-registration/slot-registration.component';
import { WalletParkingSearchComponent } from './wallet-parking-search/wallet-parking-search.component';
import { TransferOwnershipComponent } from './transfer-ownership/transfer-ownership.component';
import { FloaterComponent } from './floater/floater/floater.component';
import { SlotRequestComponent } from './floater/slot-request/slot-request.component';
import { ShareWithBuddyComponent } from './floater/share-with-buddy/share-with-buddy.component';
 import {DataService} from '../shared/dataService'


const appRoutes = [
                    { path: 'SlotRegistration', component: SlotRegistrationComponent },
                    { path: 'SlotDetails', component: SlotDetailsComponent },
                    { path: 'SlotEmployeeInformation', component: SlotEmployeeInformationComponent },
                    { path: 'WalletParking', component: WalletParkingSearchComponent },
                    { path: 'floater', component: FloaterComponent },
                    { path: '', component: WalletParkingSearchComponent },
                  ];

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailComponent,
    SlotBookingdetailsComponent,
    SlotDetailsComponent,
    SlotEmployeeInformationComponent,
    SlotRegistrationComponent,
    WalletParkingSearchComponent,
    TransferOwnershipComponent,
    FloaterComponent,
    SlotRequestComponent,
    ShareWithBuddyComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
