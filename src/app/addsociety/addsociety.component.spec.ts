import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsocietyComponent } from './addsociety.component';

describe('AddsocietyComponent', () => {
  let component: AddsocietyComponent;
  let fixture: ComponentFixture<AddsocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsocietyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
