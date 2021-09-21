import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddMedicamentoComponent } from './components/add-medicamento/add-medicamento.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    AddModalidadComponent,
    AddMedicamentoComponent,
    AddAlumnoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
