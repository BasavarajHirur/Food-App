import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Handle_Login, selectUserDetails } from 'src/app/store';
import { Show_cart } from 'src/app/store/cartDetails/cart.actions';
import { selectCartDetails, selectShowCart } from 'src/app/store/cartDetails/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public onlineStatus = true;
  public cart: any = [];
  public toggle = false;
  public viewCart = false;
  public isLoggedIn$: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getUserDetails
    this.showCart();
    this.cartDetails();
  }

  cartDetails() {
    this.store.select(selectCartDetails).subscribe(
      res => {
        this.cart = res?.filter((item) => item?.type !== 'TopCarousel');
      }
    )
  }

  showCart() {
    this.store.select(selectShowCart).subscribe(
      res => {
        this.viewCart = res;
        console.log(res)
      }
    )
  }

  handleShowCart() {
    this.store.dispatch(Show_cart());
  }

  getUserDetails() {
    this.isLoggedIn$ = this.store.select(selectUserDetails);
  }

  logIn() {
    this.store.dispatch(Handle_Login({ isOpen: true }));
  }
}
