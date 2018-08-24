import { Injectable } from "@angular/core";
import { IParkingClass } from "../Model/IParkingClass";
import { ISlotDetails } from "../Model/ISlotDetails";

@Injectable()
export class DataService {

    getParkingClass() {
        let parkingClassData: IParkingClass[] = 
                                                [
                                                    { ClassId: 1, Class: 'Dedicated' },
                                                    { ClassId: 2, Class: 'Floater' },
                                                    { ClassId: 3, Class: 'Vip' },
                                                    { ClassId: 4, Class: 'Guest' },
                                                    { ClassId: 5, Class: 'Cab' }
                                                ]
       return parkingClassData;
    }

    getSlotDetails()
    {
        let parkingClassData = this.getParkingClass();
        let slotDetailsData: ISlotDetails[] = 
        [
            {   Slot:parkingClassData[0],Total:200,Occupied:100,Available:100,ShowSlotDetails:false},
            {   Slot:parkingClassData[1],Total:20,Occupied:10,Available:10,ShowSlotDetails:false},
            {   Slot:parkingClassData[2],Total:50,Occupied:25,Available:25,ShowSlotDetails:false},
            {   Slot:parkingClassData[3],Total:10,Occupied:10,Available:0,ShowSlotDetails:false},
            {   Slot:parkingClassData[4],Total:10,Occupied:10,Available:0,ShowSlotDetails:false}
        ]

        return slotDetailsData;
    }
}