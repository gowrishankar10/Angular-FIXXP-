import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsCategoryComponent } from './visitors-category.component';

describe('VisitorsCategoryComponent', () => {
  let component: VisitorsCategoryComponent;
  let fixture: ComponentFixture<VisitorsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
