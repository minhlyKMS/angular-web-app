import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../../models';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(
          (params: ParamMap) => this.service.getProduct(params.get('id'))
        )
      )
      .subscribe(result => this.product = result);
  }

  back() {
    this.router.navigate(['/products']);
  }
}
