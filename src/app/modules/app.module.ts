import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../templates/home/home.component';
import { NavbarModule } from './navbar/navbar.module';
import { MainModule } from './main.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [AppComponent, HomeComponent,],
  imports: [
    BrowserModule,
    MainModule,
    NavbarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BrowserModule,
    MainModule,
    NavbarModule,
    FooterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
