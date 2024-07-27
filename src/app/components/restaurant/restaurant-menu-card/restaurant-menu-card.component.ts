import { Component, Input, OnInit } from '@angular/core';
import { CLOUDINARY_CDN_URL } from 'src/app/contants/api-url';

@Component({
  selector: 'app-restaurant-menu-card',
  templateUrl: './restaurant-menu-card.component.html',
  styleUrls: ['./restaurant-menu-card.component.scss']
})
export class RestaurantMenuCardComponent implements OnInit {

  @Input('restauants') restauants: any;
  public CLOUDINARY_CDN_URL = CLOUDINARY_CDN_URL;
  constructor() { }

  ngOnInit(): void {

  }
}
