import { Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  lista: string[]=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

  nombre = "Juaninho Perezinho";

  edad = 120;

    saldo = 10000000;
  elementos = [
    {codigo: 1001,nombreProducto: "espinacas",precioProducto: 2222},
    {codigo: 1002,nombreProducto: "tallarines",precioProducto: 3333}]


    fecha= new Date();
}
