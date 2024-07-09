import { Component, Input } from '@angular/core';
import { CLOUDINARY_OFFER_URL } from 'src/app/contants/api-url';

@Component({
  selector: 'app-display-coupon',
  templateUrl: './display-coupon.component.html',
  styleUrls: ['./display-coupon.component.scss']
})
export class DisplayCouponComponent {

  @Input('coupon') coupon: any;

  public CLOUDINARY_OFFER_URL = CLOUDINARY_OFFER_URL;

}
