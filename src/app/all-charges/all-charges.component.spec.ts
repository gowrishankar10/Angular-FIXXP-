import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChargesComponent } from './all-charges.component';

describe('AllChargesComponent', () => {
  let component: AllChargesComponent;
  let fixture: ComponentFixture<AllChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
