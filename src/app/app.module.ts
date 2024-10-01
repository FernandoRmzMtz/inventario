import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProducsTableComponent } from './producs-table/producs-table.component';
import { BodyComponent } from './body/body.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InventoryService } from './services/inventory.service';

@NgModule({
declarations: [
],
imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
],
providers: [InventoryService],
bootstrap: []
})
export class AppModule { }
