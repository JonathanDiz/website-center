import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Lógica para gestionar el carrito de compras y calcular el total
  products: any[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.products.reduce((acc, product) => acc + product.price, 0);
  }

  checkout(): void {
    // Lógica para realizar el pago
  }
}
