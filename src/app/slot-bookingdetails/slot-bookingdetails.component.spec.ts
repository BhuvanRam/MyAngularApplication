import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingdetailsComponent } from './slot-bookingdetails.component';

describe('SlotBookingdetailsComponent', () => {
  let component: SlotBookingdetailsComponent;
  let fixture: ComponentFixture<SlotBookingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
