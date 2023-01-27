import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketWorkersKycComponent } from './view-ticket-workers-kyc.component';

describe('ViewTicketWorkersKycComponent', () => {
  let component: ViewTicketWorkersKycComponent;
  let fixture: ComponentFixture<ViewTicketWorkersKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTicketWorkersKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTicketWorkersKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
