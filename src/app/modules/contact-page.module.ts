import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactPageComponent } from "../templates/home/contact-page/contact-page.component";

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule],
  exports: [ContactPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactPageModule { }