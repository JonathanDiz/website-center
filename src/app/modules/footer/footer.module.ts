import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/templates/home/footer/footer.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterModule { }
