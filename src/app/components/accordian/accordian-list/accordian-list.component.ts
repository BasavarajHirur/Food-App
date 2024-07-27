import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CLOUDINARY_CDN_URL, MEME_2 } from 'src/app/contants/api-url';
import { Add_Item_To_Cart } from 'src/app/store/cartDetails/cart.actions';
import { selectCartDetails } from 'src/app/store/cartDetails/cart.selectors';

@Component({
  selector: 'app-accordian-list',
  templateUrl: './accordian-list.component.html',
  styleUrls: ['./accordian-list.component.scss']
})
export class AccordianListComponent {
  @Input('accordianList') accordianList: any;

  public CLOUDINARY_CDN_URL = CLOUDINARY_CDN_URL;
  public MEME_2 = MEME_2;
  constructor(private store: Store) { }

  addToCart(item: any) {
    // this.toastrService.success('Success', `${item.card?.info?.name} added to cart`);
    this.store.dispatch(Add_Item_To_Cart({ item }));

    this.store.select(selectCartDetails).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
