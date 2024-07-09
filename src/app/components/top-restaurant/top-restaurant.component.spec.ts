import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRestaurantComponent } from './top-restaurant.component';

describe('TopRestaurantComponent', () => {
  let component: TopRestaurantComponent;
  let fixture: ComponentFixture<TopRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRestaurantComponent]
    });
    fixture = TestBed.createComponent(TopRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
