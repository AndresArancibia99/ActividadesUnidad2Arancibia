import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Act3Component } from './act3/act3.component';
import { BootstrapdirectComponent } from './bootstrapdirect/bootstrapdirect.component';
import { EventosComponent } from './eventos/eventos.component';
import { PipesComponent } from './pipes/pipes.component';
const routes: Routes = [
  {path:'act3', component: Act3Component},
  {path:'bootstrapdirect', component: BootstrapdirectComponent},
  {path:'eventos', component: EventosComponent},
  {path:'pipes', component: PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
