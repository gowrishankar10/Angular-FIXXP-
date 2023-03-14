import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatUserKycComponent } from './flat-user-kyc.component';

describe('FlatUserKycComponent', () => {
  let component: FlatUserKycComponent;
  let fixture: ComponentFixture<FlatUserKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatUserKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatUserKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
