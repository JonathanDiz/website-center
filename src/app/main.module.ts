import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingPageComponent } from '../app/home/landing-page/landing-page.component';
import { ContactPageComponent } from '../app/home/contact-page/contact-page.component';
import { ProductPageComponent } from '../app/home/product-page/product-page.component';
import { TermsOfServicePageComponent } from '../app/home/terms-of-service-page/terms-of-service-page.component';

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
})
export class MainModule {}
