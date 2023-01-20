import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyPromotionsComponent } from './society-promotions.component';

describe('SocietyPromotionsComponent', () => {
  let component: SocietyPromotionsComponent;
  let fixture: ComponentFixture<SocietyPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
