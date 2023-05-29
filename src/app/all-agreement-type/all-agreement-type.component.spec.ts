import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAgreementTypeComponent } from './all-agreement-type.component';

describe('AllAgreementTypeComponent', () => {
  let component: AllAgreementTypeComponent;
  let fixture: ComponentFixture<AllAgreementTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAgreementTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAgreementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
