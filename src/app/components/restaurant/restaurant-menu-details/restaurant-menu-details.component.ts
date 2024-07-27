import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CLOUDINARY_CDN_URL } from 'src/app/contants/api-url';
import { selectItemCategory, selectNestedItemCategory, selectRestaurantDetails, selectRestaurantmenuCarousel, selectRestaurantOfferDetails, Set_Restaurant_Id } from 'src/app/store/restaurantDetails';

@Component({
  selector: 'app-restaurant-menu-details',
  templateUrl: './restaurant-menu-details.component.html',
  styleUrls: ['./restaurant-menu-details.component.scss']
})
export class RestaurantMenuDetailsComponent implements OnInit {
  public CLOUDINARY_CDN_URL = CLOUDINARY_CDN_URL;
  public restaurantDetails: any;
  public offerDetails: any;
  public menuCarousel: any;
  public itemCategory: any;
  public nestedItemCategory: any;
  public selectedIndex: any;

  constructor(private router: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      (res: any) => {
        const Id = res.params['Id'];
        this.store.dispatch(Set_Restaurant_Id({ Id }));
        this.getRestaurantDetails();
        this.getOfferDetails();
        this.getMenuCarousel();
        this.getItemCategory();
        this.getNestedItemCategory();
      }
    )
  }

  getRestaurantDetails() {
    this.store.select(selectRestaurantDetails).subscribe(
      res => {
        this.restaurantDetails = res;
      }
    )
  }

  getOfferDetails() {
    this.store.select(selectRestaurantOfferDetails).subscribe(
      res => {
        this.offerDetails = res;
      }
    )
  }

  getMenuCarousel() {
    this.store.select(selectRestaurantmenuCarousel).subscribe(
      res => {
        console.log(res)
        this.menuCarousel = res;
      }
    )
  }

  getItemCategory() {
    this.store.select(selectItemCategory).subscribe(
      res => {
        this.itemCategory = res;
      }
    )
  }

  getNestedItemCategory() {
    this.store.select(selectNestedItemCategory).subscribe(
      res => {
        console.log(res)
        this.nestedItemCategory = res;
      }
    )
  }

  toggleAccordian(index: any) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
