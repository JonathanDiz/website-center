import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/templates/home/navbar/navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarModule { }
