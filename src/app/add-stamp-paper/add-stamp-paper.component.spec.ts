import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStampPaperComponent } from './add-stamp-paper.component';

describe('AddStampPaperComponent', () => {
  let component: AddStampPaperComponent;
  let fixture: ComponentFixture<AddStampPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStampPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStampPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
