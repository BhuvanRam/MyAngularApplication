import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-bookingdetails',
  templateUrl: './slot-bookingdetails.component.html',
  styleUrls: ['./slot-bookingdetails.component.css']
})
export class SlotBookingdetailsComponent implements OnInit {
 property: string = "Slot Booking Details";

 
  constructor() { }

  ngOnInit() {
  }

}
