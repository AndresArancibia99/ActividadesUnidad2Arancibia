import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  
  
  
  /*title = 'unidad2';
  nombre = 'Pedro Soto';
  edad = 25;
  email = 'psoto@gmail.com';
  sueldos =[1200, 1350, 1500, 1250, 2500];
  estado = true;
  notas = [50, 60, 70, 50, 60];
  actividad = ['supervisor', 'supervisor', 'encargado de obra', 'encargado de obra', 'encargado de obra']
   
  
  TieneTrabajo(){
  if(this.estado){
    return 'Tiene trabajo';

  }
  else{
    return 'No tiene Trabajo';
  }
  }


  sumarSueldos(){
let suma = 0
for (let i=0; i<this.sueldos.length; i++){
  suma = suma + this.sueldos[i];
}
return suma
  }

  calcularPromedio(){
    let suma = 0;
    let promedio = 0;
    for (let i=0; i<this.notas.length; i++){
      suma = suma + this.notas[i];
    }
    promedio = suma/this.notas.length;
    return promedio
      }*/


      productos:any = null;

      constructor(private productosServicios: ProductosService){

      }

      ngOnInit(){
        this.productos = this.productosServicios.devolverLista();
      }
}
