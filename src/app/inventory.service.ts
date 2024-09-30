import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts() {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
    this.productsSubject.next(this.products);
  }
}
