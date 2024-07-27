import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';
import { RestaurantMenuDetailsComponent } from './components/restaurant/restaurant-menu-details/restaurant-menu-details.component';
import { AppComponent } from './app.component';

const routes: Route[] = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'restaurants/:Id',
        component: RestaurantMenuDetailsComponent,
      },
    ],
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
