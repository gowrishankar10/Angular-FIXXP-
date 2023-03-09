import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampPaperComponent } from './stamp-paper.component';

describe('StampPaperComponent', () => {
  let component: StampPaperComponent;
  let fixture: ComponentFixture<StampPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StampPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StampPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
