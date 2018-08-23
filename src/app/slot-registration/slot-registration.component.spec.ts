import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotRegistrationComponent } from './slot-registration.component';

describe('SlotRegistrationComponent', () => {
  let component: SlotRegistrationComponent;
  let fixture: ComponentFixture<SlotRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
