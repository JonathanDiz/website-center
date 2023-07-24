import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from 'src/app/templates/shop/checkout/checkout.component';



@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule],
  exports: [CheckoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule { }
