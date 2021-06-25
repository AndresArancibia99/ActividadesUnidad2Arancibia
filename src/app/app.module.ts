import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { Form1Component } from './form1/form1.component';
import { PasoapasoComponent } from './pasoapaso/pasoapaso.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActComponent } from './act/act.component';
import { Form2Component } from './form2/form2.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { EstilosComponent } from './estilos/estilos.component';
import { CrudComponent } from './crud/crud.component';
import { Act3Component } from './act3/act3.component';
import { BootstrapdirectComponent } from './bootstrapdirect/bootstrapdirect.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    Form1Component,
    PasoapasoComponent,
    OpcionesComponent,
    Formulario1Component,
    ActComponent,
    Form2Component,
    DirectivasComponent,
    PipesComponent,
    EstilosComponent,
    CrudComponent,
    Act3Component,
    BootstrapdirectComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
