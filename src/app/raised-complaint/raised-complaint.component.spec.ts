import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedComplaintComponent } from './raised-complaint.component';

describe('RaisedComplaintComponent', () => {
  let component: RaisedComplaintComponent;
  let fixture: ComponentFixture<RaisedComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisedComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisedComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
