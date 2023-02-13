import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDueAmountComponent } from './view-due-amount.component';

describe('ViewDueAmountComponent', () => {
  let component: ViewDueAmountComponent;
  let fixture: ComponentFixture<ViewDueAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDueAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDueAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
