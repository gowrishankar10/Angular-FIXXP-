import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyTicketWorkersComponent } from './society-ticket-workers.component';

describe('SocietyTicketWorkersComponent', () => {
  let component: SocietyTicketWorkersComponent;
  let fixture: ComponentFixture<SocietyTicketWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyTicketWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyTicketWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
