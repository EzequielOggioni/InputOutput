import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Output()
  public eliminarProducto = new EventEmitter<Producto>();
  @Input()  productoEntrada:Producto;
  constructor() {
    this.productoEntrada = new Producto();

   }

  ngOnInit(): void {
  }

  quitar(){
    this.eliminarProducto.emit(this.productoEntrada);
  }

}
