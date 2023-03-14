import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersKycDocsComponent } from './all-users-kyc-docs.component';

describe('AllUsersKycDocsComponent', () => {
  let component: AllUsersKycDocsComponent;
  let fixture: ComponentFixture<AllUsersKycDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersKycDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUsersKycDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
