import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocietyManagerKycComponent } from './view-society-manager-kyc.component';

describe('ViewSocietyManagerKycComponent', () => {
  let component: ViewSocietyManagerKycComponent;
  let fixture: ComponentFixture<ViewSocietyManagerKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSocietyManagerKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSocietyManagerKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
