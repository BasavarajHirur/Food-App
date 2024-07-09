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
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantMenuDetailsComponent } from './components/restaurant-menu-details/restaurant-menu-details.component';
import { TopRestaurantCarousalComponent } from './components/Carousel/top-restaurant-carousal/top-restaurant-carousal.component';
import { WhatIsOnYourMindCarousalComponent } from './components/Carousel/what-is-on-your-mind-carousal/what-is-on-your-mind-carousal.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { TopRestaurantComponent } from './components/top-restaurant/top-restaurant.component';
import { RestaurantMenuCardComponent } from './components/restaurant-menu-card/restaurant-menu-card.component';
import { RestaurantDetailsEffect, RestaurantDetailsReducer } from './store/restaurantDetails';
import { DisplayCouponComponent } from './components/display-coupon/display-coupon.component';
import { MenuCarouselComponent } from './components/Carousel/menu-carousel/menu-carousel.component';
import { CategoryAccordianComponent } from './components/accordian/category-accordian/category-accordian.component';
import { AccordianListComponent } from './components/accordian/accordian-list/accordian-list.component';
import { NestedAccordianCategoryComponent } from './components/accordian/nested-accordian-category/nested-accordian-category.component';

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
    NestedAccordianCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('data', commonReducer),
    EffectsModule.forFeature([CommonEffect]),
    StoreModule.forFeature('restaurantDetails', RestaurantDetailsReducer),
    EffectsModule.forFeature([RestaurantDetailsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
