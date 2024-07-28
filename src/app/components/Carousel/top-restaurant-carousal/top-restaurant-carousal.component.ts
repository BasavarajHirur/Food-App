import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTopRatedRestData } from 'src/app/store/common.selector';

@Component({
  selector: 'app-top-restaurant-carousal',
  templateUrl: './top-restaurant-carousal.component.html',
  styleUrls: ['./top-restaurant-carousal.component.scss']
})
export class TopRestaurantCarousalComponent {
  public topRestaurants$: any;

  constructor(private store: Store) {
    this.topRestaurants$ = this.store.select(selectTopRatedRestData);
  }
}
