import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  property:string='Vehicle Details'
  constructor() { }

  ngOnInit() {
  }

}
