import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPayComponent } from './rent-pay.component';

describe('RentPayComponent', () => {
  let component: RentPayComponent;
  let fixture: ComponentFixture<RentPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
