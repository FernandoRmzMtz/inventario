import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product.model'; 
import { InventoryService } from '../inventory.service'; 
@Component({
  standalone:true,
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  imports: [ReactiveFormsModule]
})
export class FormularioComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private inventoryService: InventoryService) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      quantity: [0, Validators.required],
      purchasePrice: [0, Validators.required],
      publicPrice: [0, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.inventoryService.addProduct(newProduct); 
      this.productForm.reset();
    }
  }
}
