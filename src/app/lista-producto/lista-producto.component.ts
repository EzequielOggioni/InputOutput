import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../helper/producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  nuevoProducto: Producto;
  public nuevo: boolean
  public lista: Array<Producto>;

  constructor(miSrv: ProductoService ) {
    this.nuevo = false;
    this.nuevoProducto = new Producto();
    this.lista =  miSrv.lista;
  }
  borrar(p:number) {
    
     this.lista.splice(p,1);

  }

  nuevoProd() {
    this.nuevo = true;
    this.nuevoProducto = new Producto();

  }


  ngOnInit(): void {
  }

}
