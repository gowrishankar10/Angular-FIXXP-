import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatusersComponent } from './flatusers.component';

describe('FlatusersComponent', () => {
  let component: FlatusersComponent;
  let fixture: ComponentFixture<FlatusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
