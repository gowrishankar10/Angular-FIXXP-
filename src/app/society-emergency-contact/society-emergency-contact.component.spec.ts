import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyEmergencyContactComponent } from './society-emergency-contact.component';

describe('SocietyEmergencyContactComponent', () => {
  let component: SocietyEmergencyContactComponent;
  let fixture: ComponentFixture<SocietyEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyEmergencyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
