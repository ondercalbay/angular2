import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private ProductService: ProductService) { }
  //ProductService p = new ProductService();
  title: string = "Product List"
  products: Product[];

  getProducts(): void {
    this.products = this.ProductService.getProducts();
  }
  ngOnInit() {
    this.getProducts();
  }

}
