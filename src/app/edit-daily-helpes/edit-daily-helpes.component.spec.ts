import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDailyHelpesComponent } from './edit-daily-helpes.component';

describe('EditDailyHelpesComponent', () => {
  let component: EditDailyHelpesComponent;
  let fixture: ComponentFixture<EditDailyHelpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDailyHelpesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDailyHelpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
