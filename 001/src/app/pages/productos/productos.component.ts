import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from './../../models/product.model';

@Component({
  standalone: true,
  imports: [ProductComponent],
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
    });
  }
}
