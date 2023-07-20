import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    const apiURL = 'https://foodapi.calorieking.com/v1/foods/search';

    const params = {
      term: 'foods',
      locale: 'en_US',
      maxResults: 10,
    };

    this.http.get<any[]>(apiURL, { params })
      .pipe(
        tap(data => {
          this.products = data;
        }),
        catchError(error => {
          console.log('Error fetching products:', error);
          return []; // Puedes retornar un valor predeterminado o manejar el error de otra manera
        })
      )
      .subscribe();
  }
}
