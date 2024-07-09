import { Component, Input } from '@angular/core';
import { CLOUDINARY_TOP_PICKS_URL } from 'src/app/contants/api-url';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss']
})
export class MenuCarouselComponent {
  @Input('carousel') carousel: any;

  public CLOUDINARY_TOP_PICKS_URL = CLOUDINARY_TOP_PICKS_URL;
}
