import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceComponent } from 'src/app/services/product-service/product-service.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceComponent
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  addToCart(): void {
    // Lógica para agregar el producto al carrito
  }
}
