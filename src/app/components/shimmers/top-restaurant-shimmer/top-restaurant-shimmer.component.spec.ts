import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRestaurantShimmerComponent } from './top-restaurant-shimmer.component';

describe('TopRestaurantShimmerComponent', () => {
  let component: TopRestaurantShimmerComponent;
  let fixture: ComponentFixture<TopRestaurantShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRestaurantShimmerComponent]
    });
    fixture = TestBed.createComponent(TopRestaurantShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
