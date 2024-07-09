import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRestaurantCarousalComponent } from './top-restaurant-carousal.component';

describe('TopRestaurantCarousalComponent', () => {
  let component: TopRestaurantCarousalComponent;
  let fixture: ComponentFixture<TopRestaurantCarousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRestaurantCarousalComponent]
    });
    fixture = TestBed.createComponent(TopRestaurantCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
