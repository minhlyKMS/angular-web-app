import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
// import { Observable } from 'rxjs';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../../models';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // @Input() product: Product;
  // product$: Observable<Product>;
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
