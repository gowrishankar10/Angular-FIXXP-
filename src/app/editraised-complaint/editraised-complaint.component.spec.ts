import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditraisedComplaintComponent } from './editraised-complaint.component';

describe('EditraisedComplaintComponent', () => {
  let component: EditraisedComplaintComponent;
  let fixture: ComponentFixture<EditraisedComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditraisedComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditraisedComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
