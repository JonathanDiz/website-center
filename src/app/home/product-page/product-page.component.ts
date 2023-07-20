import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products = [
    { name: 'Product 1', description: 'Description 1' },
    { name: 'Product 2', description: 'Description 2' },
    { name: 'Product 3', description: 'Description 3' }
  ];

  cart: Product[] = [];

  addToCart(product: Product) {
    // Implement the logic to add the product to the shopping cart
    this.cart.push(product);
    console.log('Added to cart:', product);
  }
}
