import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductPageComponent } from "../templates/home/product-page/product-page.component";

@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule],
  exports: [ProductPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductPageModule { }