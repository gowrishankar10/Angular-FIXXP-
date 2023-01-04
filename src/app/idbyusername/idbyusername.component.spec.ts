import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbyusernameComponent } from './idbyusername.component';

describe('IdbyusernameComponent', () => {
  let component: IdbyusernameComponent;
  let fixture: ComponentFixture<IdbyusernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdbyusernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdbyusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
