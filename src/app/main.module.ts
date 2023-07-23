import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingPageComponent } from '../app/templates/home/landing-page/landing-page.component';
import { ContactPageComponent } from '../app/templates/home/contact-page/contact-page.component';
import { ProductPageComponent } from '../app/templates/home/product-page/product-page.component';
import { TermsOfServicePageComponent } from '../app/templates/home/terms-of-service-page/terms-of-service-page.component';
@NgModule({
  declarations: [
    LandingPageComponent,
    ContactPageComponent,
    ProductPageComponent,
    TermsOfServicePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LandingPageComponent,
    ContactPageComponent,
    ProductPageComponent,
    TermsOfServicePageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
