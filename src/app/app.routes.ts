import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'search/:searchTerm', component: HomeComponent},
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodPageComponent},
    { path: 'cart-page', component: CartPageComponent }
];
