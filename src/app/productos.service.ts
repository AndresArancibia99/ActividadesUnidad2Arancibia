import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  devolverLista(){
    return
    [{codigo:1,nombre:"tallarines",precio:1000},{codigo:2,nombre:"naranjas",precio:4444},{codigo:3,nombre:"tomates",precio:3333}]
  }
}
