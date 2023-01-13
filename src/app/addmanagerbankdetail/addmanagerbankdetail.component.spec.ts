import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanagerbankdetailComponent } from './addmanagerbankdetail.component';

describe('AddmanagerbankdetailComponent', () => {
  let component: AddmanagerbankdetailComponent;
  let fixture: ComponentFixture<AddmanagerbankdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmanagerbankdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmanagerbankdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
