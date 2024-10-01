import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service'; 
import { Product } from '../product.model';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-producs-table',
  templateUrl: './producs-table.component.html',
  styleUrls: ['./producs-table.component.css'],
  imports: [NgIf,NgFor]
})
export class ProducsTableComponent implements OnInit {
  productos: Product[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }
  
    calculateTotalCost(): number {
    return this.productos.reduce((total, prod) => total + (prod.purchasePrice * prod.quantity), 0);
  }

  calculateTotalSalesPrice(): number {
    return this.productos.reduce((total, prod) => total + (prod.publicPrice * prod.quantity), 0);
  }

  calculateTotalProfit(): number {
    return this.calculateTotalSalesPrice() - this.calculateTotalCost();
  }

  deleteProduct(id: string): void {
    this.inventoryService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(prod => prod._id !== id);
    });
  }
}
