import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuCardComponent } from './restaurant-menu-card.component';

describe('RestaurantMenuCardComponent', () => {
  let component: RestaurantMenuCardComponent;
  let fixture: ComponentFixture<RestaurantMenuCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantMenuCardComponent]
    });
    fixture = TestBed.createComponent(RestaurantMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
