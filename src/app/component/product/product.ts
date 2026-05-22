import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './Product.html',
  styleUrls: ['./product.css']
})

export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.loadProducts();

  }

  loadProducts() {

    this.productService.getProducts().subscribe({

      next: (res: any) => {

        this.products = res.products;
        console.log(this.products);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);

      }

    });

  }

}