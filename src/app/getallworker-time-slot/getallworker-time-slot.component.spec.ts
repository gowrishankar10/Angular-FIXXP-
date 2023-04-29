import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallworkerTimeSlotComponent } from './getallworker-time-slot.component';

describe('GetallworkerTimeSlotComponent', () => {
  let component: GetallworkerTimeSlotComponent;
  let fixture: ComponentFixture<GetallworkerTimeSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallworkerTimeSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallworkerTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
