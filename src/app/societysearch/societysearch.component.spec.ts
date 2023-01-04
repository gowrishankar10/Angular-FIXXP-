import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietysearchComponent } from './societysearch.component';

describe('SocietysearchComponent', () => {
  let component: SocietysearchComponent;
  let fixture: ComponentFixture<SocietysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietysearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
