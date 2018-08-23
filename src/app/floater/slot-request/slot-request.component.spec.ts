import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotRequestComponent } from './slot-request.component';

describe('SlotRequestComponent', () => {
  let component: SlotRequestComponent;
  let fixture: ComponentFixture<SlotRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
