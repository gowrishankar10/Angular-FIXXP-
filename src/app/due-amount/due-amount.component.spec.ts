import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueAmountComponent } from './due-amount.component';

describe('DueAmountComponent', () => {
  let component: DueAmountComponent;
  let fixture: ComponentFixture<DueAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
