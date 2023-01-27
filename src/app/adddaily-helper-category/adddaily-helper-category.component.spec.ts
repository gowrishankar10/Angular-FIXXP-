import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddailyHelperCategoryComponent } from './adddaily-helper-category.component';

describe('AdddailyHelperCategoryComponent', () => {
  let component: AdddailyHelperCategoryComponent;
  let fixture: ComponentFixture<AdddailyHelperCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddailyHelperCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddailyHelperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
