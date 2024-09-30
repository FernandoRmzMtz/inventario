import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProducsTableComponent } from '../producs-table/producs-table.component';

@Component({
  standalone:true,
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [FormularioComponent, ProducsTableComponent]
}) 
export class BodyComponent {}
