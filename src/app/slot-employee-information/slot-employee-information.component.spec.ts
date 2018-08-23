import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotEmployeeInformationComponent } from './slot-employee-information.component';

describe('SlotEmployeeInformationComponent', () => {
  let component: SlotEmployeeInformationComponent;
  let fixture: ComponentFixture<SlotEmployeeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotEmployeeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotEmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
