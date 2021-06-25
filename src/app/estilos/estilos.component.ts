import { Component} from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent  {

  visual ={
    'estilo1 estilo2':true
  };


  largo= 30;

  objeto = {
      "color":"white",
      "height.px":"180",
      "width.px":"700",
      "font-size.px": this.largo,
      "aling-items": "center",
      "background-color": "skyblue"
  }

  aumentar(){
   this.largo++;
   this.objeto["font-size.px"] = this.largo;
  }

  diminuir(){
    this.largo--;
    this.objeto["font-size.px"] = this.largo;
   }




  agregar(){
    this.visual['estilo1 estilo2'] = true;
  }

  borrar(){
    this.visual['estilo1 estilo2'] = false;
  }
}
