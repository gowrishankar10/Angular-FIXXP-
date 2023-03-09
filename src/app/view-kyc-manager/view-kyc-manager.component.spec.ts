import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKycManagerComponent } from './view-kyc-manager.component';

describe('ViewKycManagerComponent', () => {
  let component: ViewKycManagerComponent;
  let fixture: ComponentFixture<ViewKycManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKycManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewKycManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
