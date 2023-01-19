import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyDailyWorkersComponent } from './society-daily-workers.component';

describe('SocietyDailyWorkersComponent', () => {
  let component: SocietyDailyWorkersComponent;
  let fixture: ComponentFixture<SocietyDailyWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyDailyWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyDailyWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
