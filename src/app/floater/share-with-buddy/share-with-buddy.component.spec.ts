import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareWithBuddyComponent } from './share-with-buddy.component';

describe('ShareWithBuddyComponent', () => {
  let component: ShareWithBuddyComponent;
  let fixture: ComponentFixture<ShareWithBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareWithBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareWithBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
