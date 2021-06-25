import { Component } from '@angular/core';

@Component({
  selector: 'app-act3',
  templateUrl: './act3.component.html',
  styleUrls: ['./act3.component.css']
})
export class Act3Component  {
  
  total = 0;
  iva = 0.19;
  boleta= 0;
  prod:any = {
    codigo:'',
    nombre:'',
    cantidad:'',
    precio:'',
  }
  
  productos = [{
      codigo:'1001', nombre:'Manzana', cantidad:'1',precio:'1000'},
      {codigo:'1002', nombre:'Naranja', cantidad:'2',precio:'900'},
      {codigo:'1003', nombre:'Piña', cantidad:'3',precio:'2000'}
  ]
  
  verificarProductos(){
    return this.productos.length>0;
  }
  
  agregar(){
     for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].codigo == this.prod.codigo){
          alert('El producto no se ha ingresado porque existe');    
          return;
        }   
     }
     if(this.prod.codigo == '' || this.prod.nombre == '' || this.prod.precio == ''){
       alert('Ingrese Todos los Campos Validos!')
     }else if(this.prod.precio<0){
      alert('Ingrese una precio mayor a 0')
     }else if (this.prod.cantidad<0){
      alert('Ingrese una cantidad mayor a 0')
     }else
     this.productos.push({codigo:this.prod.codigo, 
                          nombre:this.prod.nombre,
                          cantidad:this.prod.cantidad,
                          precio:this.prod.precio});
     this.prod.codigo='';
     this.prod.nombre='';
     this.prod.cantidad='';
     this.prod.precio='';
  }
  
  seleccionar(prod:any){
    this.prod.codigo = prod.codigo;
    this.prod.nombre = prod.nombre;
    this.prod.cantidad = prod.cantidad;
    this.prod.precio = prod.precio;
  }
  
  eliminar(prod:any){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == prod.codigo){
        this.productos.splice(i,1);
        alert('El producto fue eliminado');
        return;
      }  
    }
    alert('El producto no se encontró');
  }
  
  modificar(){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == this.prod.codigo){
        this.productos[i].nombre = this.prod.nombre;
        this.productos[i].cantidad = this.prod.cantidad;
        this.productos[i].precio = this.prod.precio;
        return;
      }
    }
    alert('El código no existe!!')
    }

    Comprar(){
       
      for(let i=0; i<this.productos.length; i++){
        this.total = this.total+ parseInt(this.productos[i].precio) * parseInt(this.productos[i].cantidad)
       
    }
    
    alert("total de la boleta: " + this.total )
    this.boleta = this.total * 1.19;
    alert("total de la compra con IVA:" + this.boleta)
  }

}
