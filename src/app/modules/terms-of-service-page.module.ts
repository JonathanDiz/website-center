import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TermsOfServicePageComponent } from "../templates/home/terms-of-service-page/terms-of-service-page.component";

@NgModule({
  declarations: [TermsOfServicePageComponent],
  imports: [CommonModule],
  exports: [TermsOfServicePageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TermsOfServicePageModule { }