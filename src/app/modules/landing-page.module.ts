import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "../templates/home/landing-page/landing-page.component"; 

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageModule { }