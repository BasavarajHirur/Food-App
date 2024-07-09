import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCouponComponent } from './display-coupon.component';

describe('DisplayCouponComponent', () => {
  let component: DisplayCouponComponent;
  let fixture: ComponentFixture<DisplayCouponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCouponComponent]
    });
    fixture = TestBed.createComponent(DisplayCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
