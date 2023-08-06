import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './templates/shop/product-list/product-list.component';
import { ProductDetailsComponent } from './templates/shop/product-details/product-details.component';
import { CartComponent } from './templates/shop/cart/cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'carrito', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
