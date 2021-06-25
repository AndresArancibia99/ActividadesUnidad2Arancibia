import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component  {
  notafinal!: number;
  promedio!: number;
  salida!: string;  
  formulario = new FormGroup({

    rut : new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      nota4: new FormControl(''),
      examen: new FormControl('')


    })
  })
  enviar(){
    let nota1 = parseInt(this.formulario.value.notas.nota1);
    let nota2 = parseInt(this.formulario.value.notas.nota2);
    let nota3 = parseInt(this.formulario.value.notas.nota3);
    let nota4 = parseInt(this.formulario.value.notas.nota4);
    let examen = parseInt(this.formulario.value.notas.examen);
    this.promedio = (nota1 + nota2 + nota3 + nota4/4)
    this.notafinal = ((this.promedio*0.7) + examen*0.3)
    if (nota1>=4 && nota2 >=4 && nota3 >=4 && nota4 >=4 && examen>=4){
      console.log(this.notafinal);
      return this.salida = "El alumno aprueba ";
    }
    else
    console.log(this.notafinal);
    
    return this.salida = "El alumno reprueba ";


    /*this.promedio = ((nota1 + nota2 + nota3 + nota4) / 4)
    this.notafinal = (((examen*0.3) + (this.promedio * 0.7)) /2)
    if(this.notafinal<4 || nota1<4 || nota2<4 || nota3<4 || nota4<4)
             this.salida = "El alumno reprueba el curso";
              else
                 this.salida = "El alumno aprueba el curso";
 */
    //if(nota1 < 40 && nota2<40 && nota3<40 && nota4<40){
      //this.salida = "El alumno reprueba el curso"
    //}
    //else{
     // this.salida = "El alumno aprueba el curso"
    //}
  }
}