import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrapdirect',
  templateUrl: './bootstrapdirect.component.html',
  styleUrls: ['./bootstrapdirect.component.css']
})
export class BootstrapdirectComponent {
    
  

  ngOnInit(): void {}
  gente: any[] = [
    {
      nombre: 'juan perez',
      edad: '35',
      pais:'colombia'
    },
    {
      nombre: 'pedro perez',
      edad: '33',
      pais:'peru'
    },
    {
      nombre: 'roberto perez',
      edad: '22',
      pais:'italia'
    },
    {
      nombre: 'camila perez',
      edad: '31',
      pais:'ecuador'
    },
    {
      nombre: 'josefa perez',
      edad: '27',
      pais:'chile'
    },
    {
      nombre: 'maite perez',
      edad: '25',
      pais:'españa'
    },
  ];
  gentePorCiudad: any[] = [
    {
      'ciudad':'Chile',
      'gente':[
      {
        "nombre":"Camilo Cornejo"
      },
      {
        "nombre":"Jonatan Ceballos"
      },
  ]
},
    {
      'ciudad':'Argentina',
      'gente':[
      {
        "nombre":"Miguel Zenteno"
      },
      {
        "nombre":"Alex Díaz"
      }
      ]
    }
  ];
}