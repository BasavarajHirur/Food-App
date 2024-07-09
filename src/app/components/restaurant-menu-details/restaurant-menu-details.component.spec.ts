import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuDetailsComponent } from './restaurant-menu-details.component';

describe('RestaurantMenuDetailsComponent', () => {
  let component: RestaurantMenuDetailsComponent;
  let fixture: ComponentFixture<RestaurantMenuDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantMenuDetailsComponent]
    });
    fixture = TestBed.createComponent(RestaurantMenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
