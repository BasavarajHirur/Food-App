import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CLOUDINARY_CDN_URL, MEME_2 } from 'src/app/contants/api-url';
import { Add_Item_To_Cart, Remove_Single_Item_From_Cart } from 'src/app/store/cartDetails';
import { selectRestaurantDetails } from 'src/app/store/restaurantDetails';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent {

  @Input('cartItem') cartItem: any;
  public CLOUDINARY_CDN_URL = CLOUDINARY_CDN_URL;
  public MEME_2 = MEME_2;
  public restaurantDetails: any;

  constructor(private store: Store) {
    this.getRestaurantDetails();
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

  handleAddItem(item: any) {
    this.store.dispatch(Add_Item_To_Cart({ item }))
  }

  handleRemoveSingleItem(item: any) {
    this.store.dispatch(Remove_Single_Item_From_Cart({ item }))
  }
}
