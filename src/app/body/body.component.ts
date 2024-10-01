import { Component, ViewChild } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProducsTableComponent } from '../producs-table/producs-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone:true,
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [FormularioComponent, ProducsTableComponent, HttpClientModule]
}) 
export class BodyComponent {
  @ViewChild(ProducsTableComponent) producTable!: ProducsTableComponent;

  onProductAdded(): void {
    this.producTable.ngOnInit();
    console.log("recargado");
  }
}
