import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddraisedComplaintComponent } from './addraised-complaint.component';

describe('AddraisedComplaintComponent', () => {
  let component: AddraisedComplaintComponent;
  let fixture: ComponentFixture<AddraisedComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddraisedComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddraisedComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
