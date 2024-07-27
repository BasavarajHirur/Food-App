import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CLOUDINARY_CDN_URL, MEME_2 } from 'src/app/contants/api-url';
import { Add_Item_To_Cart, Remove_Item_From_Cart, Remove_Single_Item_From_Cart } from 'src/app/store/cartDetails/cart.actions';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  @Input('cartItem') cartItem: any;
  public CLOUDINARY_CDN_URL = CLOUDINARY_CDN_URL;
  public MEME_2 = MEME_2;

  constructor(private store: Store) { }

  handleAddItem(item: any) {
    this.store.dispatch(Add_Item_To_Cart({ item }))
  }

  handleRemoveItem(item: any) {
    this.store.dispatch(Remove_Item_From_Cart({ RemoveItem: item }))
  }

  handleRemoveSingleItem(item: any) {
    this.store.dispatch(Remove_Single_Item_From_Cart({ item }))
  }
}
