import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Filter_Top_rated_restaurant, Top_rated_restaurant } from 'src/app/store/common.actions';
import { selectListOfResto } from 'src/app/store/common.selector';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  public listOfRestaurants$: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.listOfRestaurants$ = this.store.select(selectListOfResto);
  }

  topRated() {
    this.store.dispatch(Top_rated_restaurant());
  }

  filterRestaurants(filteredValue: string) {
    this.store.dispatch(Filter_Top_rated_restaurant({ filteredValue }));
  }
}
