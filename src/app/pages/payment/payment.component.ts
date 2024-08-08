import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartDetails } from 'src/app/store/cartDetails';
import { selectRestaurantDetails } from 'src/app/store/restaurantDetails';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public cartItem = [];
  public restaurantDetails: any;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.cartDetails();
    this.getRestaurantDetails()
  }

  cartDetails() {
    this.store.select(selectCartDetails).subscribe(
      (res: any) => {
        this.cartItem = res?.filter((item: any) => item?.type !== 'TopCarousel');
      }
    )
  }

  getRestaurantDetails() {
    this.store.select(selectRestaurantDetails).subscribe(
      res => {
        this.restaurantDetails = res;
      }
    )
  }

  calculateGrandTotal(items: any) {
    let total = 0;
    items.forEach((item: any) => {
      total +=
        ((item.card.info.price || item.card.info.defaultPrice) *
          item.quantity) /
        100;
    });
    return total;
  };

}
