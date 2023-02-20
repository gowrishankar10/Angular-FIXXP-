import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkerTransactionsComponent } from './view-worker-transactions.component';

describe('ViewWorkerTransactionsComponent', () => {
  let component: ViewWorkerTransactionsComponent;
  let fixture: ComponentFixture<ViewWorkerTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkerTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkerTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
