import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStampPaperComponent } from './edit-stamp-paper.component';

describe('EditStampPaperComponent', () => {
  let component: EditStampPaperComponent;
  let fixture: ComponentFixture<EditStampPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStampPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStampPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
