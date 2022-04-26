import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  nuevoProducto: Producto;
  public lista: Array<Producto>;
  public nuevo: boolean
  constructor() {
    this.nuevo = false;
    this.lista = new Array<Producto>();
    this.lista.push({ imagen: 'https://happylearning.tv/wp-content/uploads/2017/11/portada_seccion_juegos-01.png', titulo: 'Juegos Varios' });
    this.lista.push({ imagen: 'https://acf.geeknetic.es/imgw/imagenes/auto/2020/9/30/ame-los-mejores-juegos-gratis-para-iphone.jpg', titulo: 'Buscar monedas' });
    this.nuevoProducto = new Producto();

  }
  borrar(p: Producto) {
    this.lista = this.lista.filter(t => t.titulo != p.titulo);

  }

  nuevoProd() {
    this.nuevo = true;
    this.nuevoProducto = new Producto();
    this.lista.push(this.nuevoProducto);

  }


  ngOnInit(): void {
  }

}
