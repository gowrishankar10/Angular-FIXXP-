import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTransactionHistoryComponent } from './worker-transaction-history.component';

describe('WorkerTransactionHistoryComponent', () => {
  let component: WorkerTransactionHistoryComponent;
  let fixture: ComponentFixture<WorkerTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerTransactionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
