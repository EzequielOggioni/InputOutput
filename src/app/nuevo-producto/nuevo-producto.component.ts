import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoService } from '../helper/producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  @Output()
  public aceptarNuevo = new EventEmitter<Producto>();

  @Input()
  public prod:Producto;
  constructor(public prSer:ProductoService ) {
    this.prod = new Producto();
   }

   Aceptar(){
    this.prSer.lista.push(this.prod);
    this.aceptarNuevo.emit();
   }
  ngOnInit(): void {
  }

}
