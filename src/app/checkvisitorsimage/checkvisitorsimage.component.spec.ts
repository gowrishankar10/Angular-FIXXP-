import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckvisitorsimageComponent } from './checkvisitorsimage.component';

describe('CheckvisitorsimageComponent', () => {
  let component: CheckvisitorsimageComponent;
  let fixture: ComponentFixture<CheckvisitorsimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckvisitorsimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckvisitorsimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
