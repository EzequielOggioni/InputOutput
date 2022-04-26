import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';

import { Producto } from './producto';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [ { path:'', component: ListaProductoComponent},
{path:'p' , component:ProductoComponent} ,
{path:'login', loadChildren: ()=> import('./login/login.module').then(t=> t.LoginModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
