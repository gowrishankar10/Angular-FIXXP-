import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewailyHelperDocComponent } from './viewaily-helper-doc.component';

describe('ViewailyHelperDocComponent', () => {
  let component: ViewailyHelperDocComponent;
  let fixture: ComponentFixture<ViewailyHelperDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewailyHelperDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewailyHelperDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
