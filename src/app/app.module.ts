import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { commonReducer } from './store/common.reducers';
import { CommonEffect } from './store/common.effects';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RestaurantMenuComponent } from './components/restaurant/restaurant-menu/restaurant-menu.component';
import { RestaurantMenuDetailsComponent } from './components/restaurant/restaurant-menu-details/restaurant-menu-details.component';
import { TopRestaurantCarousalComponent } from './components/Carousel/top-restaurant-carousal/top-restaurant-carousal.component';
import { WhatIsOnYourMindCarousalComponent } from './components/Carousel/what-is-on-your-mind-carousal/what-is-on-your-mind-carousal.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { TopRestaurantComponent } from './components/restaurant/top-restaurant/top-restaurant.component';
import { RestaurantMenuCardComponent } from './components/restaurant/restaurant-menu-card/restaurant-menu-card.component';
import { RestaurantDetailsEffect, RestaurantDetailsReducer } from './store/restaurantDetails';
import { DisplayCouponComponent } from './components/display-coupon/display-coupon.component';
import { MenuCarouselComponent } from './components/Carousel/menu-carousel/menu-carousel.component';
import { CategoryAccordianComponent } from './components/accordian/category-accordian/category-accordian.component';
import { AccordianListComponent } from './components/accordian/accordian-list/accordian-list.component';
import { NestedAccordianCategoryComponent } from './components/accordian/nested-accordian-category/nested-accordian-category.component';
import { CartDetailsReducer } from './store/cartDetails/cart.reducer';
import { CartDetailsEffect } from './store/cartDetails/cart.effects';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { CartSummaryComponent } from './components/cart/cart-summary/cart-summary.component';
import { AboutShimmerComponent } from './components/shimmers/about-shimmer/about-shimmer.component';
import { TopRestaurantShimmerComponent } from './components/shimmers/top-restaurant-shimmer/top-restaurant-shimmer.component';
import { MenuCardShimmerComponent } from './components/shimmers/restaurant-menu-shimmer/restaurant-menu-shimmer.component';
import { SingleMenuCardShimmerComponent } from './components/shimmers/single-menu-card-shimmer/single-menu-card-shimmer.component';
import { SingleTopRestaurantCardShimmerComponent } from './components/shimmers/single-top-restaurant-card-shimmer/single-top-restaurant-card-shimmer.component';
import { RestaurantMenuDetailsShimmerComponent } from './components/shimmers/restaurant-menu-details-shimmer/restaurant-menu-details-shimmer.component';
import { WhatIsOnYourMindShimmerComponent } from './components/shimmers/what-is-on-your-mind-shimmer/what-is-on-your-mind-shimmer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    ContactComponent,
    RestaurantMenuComponent,
    RestaurantMenuDetailsComponent,
    TopRestaurantCarousalComponent,
    WhatIsOnYourMindCarousalComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    TopRestaurantComponent,
    RestaurantMenuCardComponent,
    DisplayCouponComponent,
    MenuCarouselComponent,
    CategoryAccordianComponent,
    AccordianListComponent,
    NestedAccordianCategoryComponent,
    CartItemsComponent,
    CartSummaryComponent,
    AboutShimmerComponent,
    TopRestaurantShimmerComponent,
    MenuCardShimmerComponent,
    SingleMenuCardShimmerComponent,
    SingleTopRestaurantCardShimmerComponent,
    RestaurantMenuDetailsShimmerComponent,
    WhatIsOnYourMindShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('data', commonReducer),
    EffectsModule.forFeature([CommonEffect]),
    StoreModule.forFeature('restaurantDetails', RestaurantDetailsReducer),
    EffectsModule.forFeature([RestaurantDetailsEffect]),
    StoreModule.forFeature('cartDetails', CartDetailsReducer),
    EffectsModule.forFeature([CartDetailsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
