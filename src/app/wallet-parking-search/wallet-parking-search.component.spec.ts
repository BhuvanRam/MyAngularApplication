import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletParkingSearchComponent } from './wallet-parking-search.component';

describe('WalletParkingSearchComponent', () => {
  let component: WalletParkingSearchComponent;
  let fixture: ComponentFixture<WalletParkingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletParkingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletParkingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
