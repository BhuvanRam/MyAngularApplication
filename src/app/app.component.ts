declare var UUI: any

import { Component, OnInit } from '@angular/core';
import '../../js/uui-core.min.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 

  ngOnInit()
  {    
    UUI.Sidebar.init( {over_content: true} );    
    UUI.Navigation.init({over_content: true});
  }
}
