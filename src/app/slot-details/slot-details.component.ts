declare var UUI: any
import { Component, OnInit } from '@angular/core'
import { DataService } from '../../shared/dataService';
import { ISlotDetails } from '../../Model/ISlotDetails';

@Component({
  selector: 'app-slot-details',
  templateUrl: './slot-details.component.html',
  styleUrls: ['./slot-details.component.css']
})
export class SlotDetailsComponent implements OnInit {
  
  slotDetails:ISlotDetails[]
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.slotDetails = this._dataService.getSlotDetails();
    //UUI.TreeGrid.uui_tree_grid();
    //uui_tree_grid();
    //UUI.
    //$('.uui-table.treegrid').uui_tree_grid();
  }

  showSlotDetails(slotDetail:ISlotDetails)
  {
    slotDetail.ShowSlotDetails = !slotDetail.ShowSlotDetails;
  }
}
