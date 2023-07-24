// tienda.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from '../templates/shop/tienda.component';
import { CartModule } from './cart/cart.module';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  declarations: [TiendaComponent],
  imports: [CommonModule, CartModule, ProductListModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaModule {}
