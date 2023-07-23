import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';

// Importa los módulos de cada componente
import { LandingPageModule } from './landing-page.module';
import { ContactPageModule } from './contact-page.module';
import { ProductPageModule } from './product-page.module';
import { TermsOfServicePageModule } from './terms-of-service-page.module';
import { CartModule } from './cart.module';
import { ProductListModule } from './product-list.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    LandingPageModule,
    ContactPageModule,
    ProductPageModule,
    TermsOfServicePageModule,
    CartModule,
    ProductListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BrowserModule,
    LandingPageModule,
    ContactPageModule,
    ProductPageModule,
    TermsOfServicePageModule,
    CartModule,
    ProductListModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
