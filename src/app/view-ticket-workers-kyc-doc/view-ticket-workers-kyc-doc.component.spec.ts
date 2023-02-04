import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketWorkersKycDocComponent } from './view-ticket-workers-kyc-doc.component';

describe('ViewTicketWorkersKycDocComponent', () => {
  let component: ViewTicketWorkersKycDocComponent;
  let fixture: ComponentFixture<ViewTicketWorkersKycDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTicketWorkersKycDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTicketWorkersKycDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
