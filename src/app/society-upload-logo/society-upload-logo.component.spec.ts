import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyUploadLogoComponent } from './society-upload-logo.component';

describe('SocietyUploadLogoComponent', () => {
  let component: SocietyUploadLogoComponent;
  let fixture: ComponentFixture<SocietyUploadLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyUploadLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyUploadLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
