import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketWorkersComponent } from './view-ticket-workers.component';

describe('ViewTicketWorkersComponent', () => {
  let component: ViewTicketWorkersComponent;
  let fixture: ComponentFixture<ViewTicketWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTicketWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTicketWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
