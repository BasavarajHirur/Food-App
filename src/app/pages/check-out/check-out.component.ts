import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartDetails } from 'src/app/store/cartDetails';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  public cartItem: any[] = [];
  public signType = '';
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cartDetails();
  }

  cartDetails() {
    this.store.select(selectCartDetails).subscribe(
      (res: any) => {
        this.cartItem = res?.filter((item: any) => item?.type !== 'TopCarousel');
      }
    )
  }

  ngOnDestroy(): void {
  }
}
