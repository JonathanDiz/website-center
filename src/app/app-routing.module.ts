import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { HomeComponent } from './templates/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tienda', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'carrito', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
