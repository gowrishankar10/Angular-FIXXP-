import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHelperCategoryComponent } from './daily-helper-category.component';

describe('DailyHelperCategoryComponent', () => {
  let component: DailyHelperCategoryComponent;
  let fixture: ComponentFixture<DailyHelperCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyHelperCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyHelperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
