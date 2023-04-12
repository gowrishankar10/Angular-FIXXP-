import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentpaySettlementComponent } from './rentpay-settlement.component';

describe('RentpaySettlementComponent', () => {
  let component: RentpaySettlementComponent;
  let fixture: ComponentFixture<RentpaySettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentpaySettlementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentpaySettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
