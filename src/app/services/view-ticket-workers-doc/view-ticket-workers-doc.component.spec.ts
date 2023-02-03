import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketWorkersDocComponent } from './view-ticket-workers-doc.component';

describe('ViewTicketWorkersDocComponent', () => {
  let component: ViewTicketWorkersDocComponent;
  let fixture: ComponentFixture<ViewTicketWorkersDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTicketWorkersDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTicketWorkersDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
