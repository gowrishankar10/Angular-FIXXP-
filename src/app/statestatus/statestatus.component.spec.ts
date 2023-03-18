import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatestatusComponent } from './statestatus.component';

describe('StatestatusComponent', () => {
  let component: StatestatusComponent;
  let fixture: ComponentFixture<StatestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
