import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkerTransactionComponent } from './all-worker-transaction.component';

describe('AllWorkerTransactionComponent', () => {
  let component: AllWorkerTransactionComponent;
  let fixture: ComponentFixture<AllWorkerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWorkerTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWorkerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
