import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeTransactionComponent } from './view-home-transaction.component';

describe('ViewHomeTransactionComponent', () => {
  let component: ViewHomeTransactionComponent;
  let fixture: ComponentFixture<ViewHomeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHomeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
