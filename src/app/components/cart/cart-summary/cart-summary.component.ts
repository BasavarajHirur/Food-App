import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  @Input('cartItem') cartItem: any;
  public show: boolean = true;
  constructor() {

  }

  ngOnInit(): void {

  }

  toggleShow() {
    this.show = !this.show;
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

  parseFloat(item: any) {
    const defaultPrice = ((item?.card?.info?.defaultPrice) / 100).toFixed(2);
    const price = (item?.card?.info?.price / 100).toFixed(2);
    const defaultValue = parseFloat(defaultPrice) * item?.quantity;
    const priceValue = parseFloat(price) * item?.quantity;
    return defaultValue || priceValue;
  }
}
