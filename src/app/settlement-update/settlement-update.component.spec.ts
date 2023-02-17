import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementUpdateComponent } from './settlement-update.component';

describe('SettlementUpdateComponent', () => {
  let component: SettlementUpdateComponent;
  let fixture: ComponentFixture<SettlementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettlementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
