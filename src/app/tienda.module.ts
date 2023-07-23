// tienda.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './templates/shop/tienda.component';
import { CartModule } from './cart.module';
import { ProductListModule } from './productlist.module';

@NgModule({
  declarations: [TiendaComponent],
  imports: [CommonModule, CartModule, ProductListModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaModule {}
