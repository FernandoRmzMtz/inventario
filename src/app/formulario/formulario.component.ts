import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product.model'; 
import { InventoryService } from '../services/inventory.service'; 
import { NgIf } from '@angular/common';
import { Subject } from 'rxjs';
@Component({
  standalone:true,
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  imports: [ReactiveFormsModule, NgIf]
})
export class FormularioComponent implements OnInit {
  productForm: FormGroup;
  @Output() productAdded = new Subject<void>();
  // @Output() productAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private inventoryService: InventoryService) {
    this.productForm = this.fb.group({
      productName: ['',  [Validators.required, Validators.min(0)]],
      quantity: [0,  [Validators.required, Validators.min(0)]],
      purchasePrice: [0,  [Validators.required, Validators.min(0)]],
      publicPrice: [0,  [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.inventoryService.addProducto(newProduct).subscribe(() => {
        this.productForm.reset();
        window.location.reload();
      });
    }
  }
}
