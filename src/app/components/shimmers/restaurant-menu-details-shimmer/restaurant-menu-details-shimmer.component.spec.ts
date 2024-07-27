import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuDetailsShimmerComponent } from './restaurant-menu-details-shimmer.component';

describe('RestaurantMenuDetailsShimmerComponent', () => {
  let component: RestaurantMenuDetailsShimmerComponent;
  let fixture: ComponentFixture<RestaurantMenuDetailsShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantMenuDetailsShimmerComponent]
    });
    fixture = TestBed.createComponent(RestaurantMenuDetailsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
