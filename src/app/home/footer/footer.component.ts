import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyName: string = 'Center';
  address: string = 'New York, USA';
  email: string = 'centergerencia@center.com';
  phone: string = '+1234567890';
}
