import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyBasedVisitorsComponent } from './society-based-visitors.component';

describe('SocietyBasedVisitorsComponent', () => {
  let component: SocietyBasedVisitorsComponent;
  let fixture: ComponentFixture<SocietyBasedVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyBasedVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyBasedVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
