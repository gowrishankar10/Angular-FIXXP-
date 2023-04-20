import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyBasedPromotionsComponent } from './society-based-promotions.component';

describe('SocietyBasedPromotionsComponent', () => {
  let component: SocietyBasedPromotionsComponent;
  let fixture: ComponentFixture<SocietyBasedPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyBasedPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyBasedPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
