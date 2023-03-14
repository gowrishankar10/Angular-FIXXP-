import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersKycComponent } from './all-users-kyc.component';

describe('AllUsersKycComponent', () => {
  let component: AllUsersKycComponent;
  let fixture: ComponentFixture<AllUsersKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUsersKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
