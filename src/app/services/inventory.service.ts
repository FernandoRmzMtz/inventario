import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError<Product[]>('getProductos', []))
    );
  }

  addProducto(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      catchError(this.handleError<Product>('addProducto'))
    );
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<any>('deleteProducto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
