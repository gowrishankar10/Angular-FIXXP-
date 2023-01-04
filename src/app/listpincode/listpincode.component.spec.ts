import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpincodeComponent } from './listpincode.component';

describe('ListpincodeComponent', () => {
  let component: ListpincodeComponent;
  let fixture: ComponentFixture<ListpincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpincodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
