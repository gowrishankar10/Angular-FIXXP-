import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietySecurityGuardComponent } from './society-security-guard.component';

describe('SocietySecurityGuardComponent', () => {
  let component: SocietySecurityGuardComponent;
  let fixture: ComponentFixture<SocietySecurityGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietySecurityGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietySecurityGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
