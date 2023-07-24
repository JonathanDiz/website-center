// productlist.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../templates/shop/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule],
  exports: [ProductListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductListModule {}
