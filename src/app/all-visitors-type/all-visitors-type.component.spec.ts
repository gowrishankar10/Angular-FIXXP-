import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitorsTypeComponent } from './all-visitors-type.component';

describe('AllVisitorsTypeComponent', () => {
  let component: AllVisitorsTypeComponent;
  let fixture: ComponentFixture<AllVisitorsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVisitorsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVisitorsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
