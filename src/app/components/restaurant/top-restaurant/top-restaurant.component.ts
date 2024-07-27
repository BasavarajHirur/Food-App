import { Component, Input } from '@angular/core';
import { CLOUDINARY_CDN_URL } from 'src/app/contants/api-url';

@Component({
  selector: 'app-top-restaurant',
  templateUrl: './top-restaurant.component.html',
  styleUrls: ['./top-restaurant.component.scss']
})
export class TopRestaurantComponent {
  @Input('topRestaurant') topRestaurant: any;
  @Input('top') top: any;
  public CLOUDINARY_CDN_URL = CLOUDINARY_CDN_URL;
}
