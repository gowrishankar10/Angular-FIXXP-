import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitorCategoryComponent } from './edit-visitor-category.component';

describe('EditVisitorCategoryComponent', () => {
  let component: EditVisitorCategoryComponent;
  let fixture: ComponentFixture<EditVisitorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVisitorCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVisitorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
