import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from 'src/app/templates/shop/product-details/product-details.component';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule],
  exports: [ProductDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailsModule { }
