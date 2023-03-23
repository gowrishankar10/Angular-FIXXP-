import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeStatusComponent } from './pincode-status.component';

describe('PincodeStatusComponent', () => {
  let component: PincodeStatusComponent;
  let fixture: ComponentFixture<PincodeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PincodeStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PincodeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
