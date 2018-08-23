declare function uui_datepicker_2(): any;

import '../../../node_modules/uui-framework/js/uui/uui-datepicker.js'
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-transfer-ownership',
  templateUrl: './transfer-ownership.component.html',
  styleUrls: ['./transfer-ownership.component.css']
})
export class TransferOwnershipComponent implements AfterViewInit {
 property: string = "I would like to share slot"
  constructor() { }
  

  
  @ViewChild('datepicker') 
  private elTitle : ElementRef; 
  ngAfterViewInit() {
 
    
    console.log(this.elTitle)
   
  }
  

}
