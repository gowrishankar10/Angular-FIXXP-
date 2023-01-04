import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpincodeComponent } from './addpincode.component';

describe('AddpincodeComponent', () => {
  let component: AddpincodeComponent;
  let fixture: ComponentFixture<AddpincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpincodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
