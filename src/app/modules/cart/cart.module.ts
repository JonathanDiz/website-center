import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/app/templates/shop/cart/cart.component';



@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],
  exports: [CartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule { }
