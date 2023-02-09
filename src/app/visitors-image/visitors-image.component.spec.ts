import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsImageComponent } from './visitors-image.component';

describe('VisitorsImageComponent', () => {
  let component: VisitorsImageComponent;
  let fixture: ComponentFixture<VisitorsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
