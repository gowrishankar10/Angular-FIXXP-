import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTimeSlotComponent } from './worker-time-slot.component';

describe('WorkerTimeSlotComponent', () => {
  let component: WorkerTimeSlotComponent;
  let fixture: ComponentFixture<WorkerTimeSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerTimeSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
