import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/dataService'
import {IParkingClass} from '../../Model/IParkingClass'

@Component({
  selector: 'app-slot-registration',
  templateUrl: './slot-registration.component.html',
  styleUrls: ['./slot-registration.component.css']
})
export class SlotRegistrationComponent implements OnInit {

  vehicleClassification:IParkingClass[]

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.vehicleClassification = this._dataService.getParkingClass();
  }

}
