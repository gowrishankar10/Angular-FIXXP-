import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorsTypeComponent } from './add-visitors-type.component';

describe('AddVisitorsTypeComponent', () => {
  let component: AddVisitorsTypeComponent;
  let fixture: ComponentFixture<AddVisitorsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitorsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitorsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
