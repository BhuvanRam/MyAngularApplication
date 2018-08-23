import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-request',
  templateUrl: './slot-request.component.html',
  styleUrls: ['./slot-request.component.css']
})
export class SlotRequestComponent implements OnInit {

  canShowRequestStatus: boolean;
  canShowLoader: boolean;
  constructor() { }

  ngOnInit() {
    this.canShowRequestStatus = false;
    this.canShowLoader = false;
  }

  request() {
    this.hideRequestStatus();
    this.showLoader();
    setTimeout(() => {
      this.hideLoader();
      this.showRequestStatus();
    }, 2000);
  }

  hideLoader() {
    this.canShowLoader = false;
  }

  showLoader() {
    this.canShowLoader = true;
  }

  showRequestStatus() {
    this.canShowRequestStatus = true;
  }

  hideRequestStatus() {
    this.canShowRequestStatus = false;
  }

  share() {
  }

  submit() {
  }
}
