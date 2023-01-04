import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnysComponent } from './agnys.component';

describe('AgnysComponent', () => {
  let component: AgnysComponent;
  let fixture: ComponentFixture<AgnysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgnysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgnysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
