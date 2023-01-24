import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkersKycComponent } from './view-workers-kyc.component';

describe('ViewWorkersKycComponent', () => {
  let component: ViewWorkersKycComponent;
  let fixture: ComponentFixture<ViewWorkersKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkersKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkersKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
