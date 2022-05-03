import { Injectable } from '@angular/core';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public lista: Array<Producto>;


  constructor() { 
    this.lista = new Array<Producto>();
    this.lista.push({ imagen: 'https://happylearning.tv/wp-content/uploads/2017/11/portada_seccion_juegos-01.png', titulo: 'Juegos Varios' });
    this.lista.push({ imagen: 'https://acf.geeknetic.es/imgw/imagenes/auto/2020/9/30/ame-los-mejores-juegos-gratis-para-iphone.jpg', titulo: 'Buscar monedas' });
    
  }
}
