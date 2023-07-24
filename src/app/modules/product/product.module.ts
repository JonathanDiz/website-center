import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from 'src/app/templates/shop/product/product.component';



@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule],
  exports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule { }
