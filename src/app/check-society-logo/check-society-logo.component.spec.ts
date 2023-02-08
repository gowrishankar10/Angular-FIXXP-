import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSocietyLogoComponent } from './check-society-logo.component';

describe('CheckSocietyLogoComponent', () => {
  let component: CheckSocietyLogoComponent;
  let fixture: ComponentFixture<CheckSocietyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSocietyLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSocietyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
