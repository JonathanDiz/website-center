// tienda.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from '../templates/shop/tienda.component';
import { CartModule } from './cart/cart.module';
import { ProductListModule } from './product-list/product-list.module';
import { NavbarComponent } from '../templates/home/navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
@NgModule({
  declarations: [TiendaComponent, NavbarComponent],
  imports: [CommonModule, CartModule, ProductListModule, NavbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaModule {}
