import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailsEffect, RestaurantDetailsReducer } from './store/restaurantDetails';
import { DisplayCouponComponent } from './components/display-coupon/display-coupon.component';
import { MenuCarouselComponent, TopRestaurantCarousalComponent, WhatIsOnYourMindCarousalComponent } from './components/carousel';
import { AccordianListComponent, CategoryAccordianComponent, NestedAccordianCategoryComponent } from './components/accordian';
import { CartItemsComponent, CartSummaryComponent } from './components/cart';
import { RestaurantMenuCardComponent, RestaurantMenuComponent, RestaurantMenuDetailsComponent, TopRestaurantComponent } from './components/restaurant';
import { AboutShimmerComponent, MenuCardShimmerComponent, RestaurantMenuDetailsShimmerComponent, SingleMenuCardShimmerComponent, SingleTopRestaurantCardShimmerComponent, TopRestaurantShimmerComponent, WhatIsOnYourMindShimmerComponent } from './components/shimmers';
import { CommonEffect, commonReducer } from './store';
import { CartDetailsEffect, CartDetailsReducer } from './store/cartDetails';
import { AboutComponent, CartComponent, CheckOutComponent, ContactComponent, ErrorComponent, HeaderComponent, HomeComponent, LogInComponent, PaymentComponent, SearchComponent } from './pages';
import { NonCommonHeaderComponent } from './pages/header/non-common-header/non-common-header.component';
import { CheckOutShimmerComponent } from './components/shimmers/check-out-shimmer/check-out-shimmer.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SignUpComponent } from './components/user-form/sign-up/sign-up.component';
import { CancelPolicyComponent, CheckoutCartComponent } from './components/check-out';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    WhatIsOnYourMindShimmerComponent,
    CheckOutComponent,
    PaymentComponent,
    LogInComponent,
    NonCommonHeaderComponent,
    CheckoutCartComponent,
    CheckOutShimmerComponent,
    UserFormComponent,
    SignUpComponent,
    CancelPolicyComponent
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
