import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocietyLogoComponent } from './view-society-logo.component';

describe('ViewSocietyLogoComponent', () => {
  let component: ViewSocietyLogoComponent;
  let fixture: ComponentFixture<ViewSocietyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSocietyLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSocietyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
