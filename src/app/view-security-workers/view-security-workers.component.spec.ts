import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityWorkersComponent } from './view-security-workers.component';

describe('ViewSecurityWorkersComponent', () => {
  let component: ViewSecurityWorkersComponent;
  let fixture: ComponentFixture<ViewSecurityWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecurityWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
