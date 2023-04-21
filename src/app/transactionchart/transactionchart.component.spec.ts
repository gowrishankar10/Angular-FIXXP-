import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionchartComponent } from './transactionchart.component';

describe('TransactionchartComponent', () => {
  let component: TransactionchartComponent;
  let fixture: ComponentFixture<TransactionchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
