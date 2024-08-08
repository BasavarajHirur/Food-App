import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Clear_cart, Show_cart } from 'src/app/store/cartDetails/cart.actions';
import { selectCartDetails } from 'src/app/store/cartDetails/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items: any;
  public cartItem: any;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.cartDetails();
  }

  cartDetails() {
    this.store.select(selectCartDetails).subscribe(
      res => {
        this.items = res;
        this.cartItem = res?.filter((item) => item?.type !== 'TopCarousel');
      }
    )
  }

  handleShowCart() {
    this.store.dispatch(Show_cart());
  }

  handleClearCart() {
    this.store.dispatch(Clear_cart());
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

}
