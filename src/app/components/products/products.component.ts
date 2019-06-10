import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  imageShowed = false;
  btnText = 'Show Image';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  toggleShowingImages() {
    this.imageShowed = !this.imageShowed;
    if (this.imageShowed) {
      this.btnText = 'Hide Image';
    } else {
      this.btnText = 'Show Image';
    }
  }
}
