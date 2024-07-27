import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTopRestaurantCardShimmerComponent } from './single-top-restaurant-card-shimmer.component';

describe('SingleTopRestaurantCardShimmerComponent', () => {
  let component: SingleTopRestaurantCardShimmerComponent;
  let fixture: ComponentFixture<SingleTopRestaurantCardShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTopRestaurantCardShimmerComponent]
    });
    fixture = TestBed.createComponent(SingleTopRestaurantCardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
