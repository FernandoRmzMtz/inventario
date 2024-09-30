import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProducsTableComponent } from './producs-table/producs-table.component';
import { BodyComponent } from './body/body.component';
import { InventoryService } from './inventory.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
declarations: [
],
imports: [
    BrowserModule,
    ReactiveFormsModule
],
providers: [],
bootstrap: []
})
export class AppModule { }
