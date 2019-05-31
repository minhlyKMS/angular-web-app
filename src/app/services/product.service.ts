import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Product } from '../models/product';
import { MOCK_PRODUCTS } from '../constants/mock-products';
 
@Injectable({
  providedIn: 'root',
})
export class ProductService {
 
  constructor() { }
 
  getProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS);
  }
}
