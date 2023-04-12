import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTransactionUpdateComponent } from './worker-transaction-update.component';

describe('WorkerTransactionUpdateComponent', () => {
  let component: WorkerTransactionUpdateComponent;
  let fixture: ComponentFixture<WorkerTransactionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerTransactionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerTransactionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
