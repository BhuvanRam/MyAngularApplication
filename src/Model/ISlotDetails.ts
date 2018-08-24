import { IParkingClass } from "./IParkingClass";

export interface ISlotDetails
{
    Slot:IParkingClass
    Total:number
    Occupied:number
    Available:number  
    ShowSlotDetails:boolean  
}