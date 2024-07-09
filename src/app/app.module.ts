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
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu.component';
import { RestaurantMenuDetailsComponent } from './pages/restaurant-menu-details/restaurant-menu-details.component';
import { TopRestaurantCarousalComponent } from './pages/top-restaurant-carousal/top-restaurant-carousal.component';
import { WhatIsOnYourMindCarousalComponent } from './pages/what-is-on-your-mind-carousal/what-is-on-your-mind-carousal.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('data', commonReducer),
    EffectsModule.forFeature([CommonEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
