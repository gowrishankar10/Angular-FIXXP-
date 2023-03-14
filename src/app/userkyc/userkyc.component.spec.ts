import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserkycComponent } from './userkyc.component';

describe('UserkycComponent', () => {
  let component: UserkycComponent;
  let fixture: ComponentFixture<UserkycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserkycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
