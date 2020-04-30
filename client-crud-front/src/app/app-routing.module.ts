import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteListComponent} from "./component/cliente-list/cliente-list.component";
import {ClienteFormComponent} from "./component/cliente-form/cliente-form.component";
import {EnderecoListComponent} from "./component/endereco-list/endereco-list.component";
import {EnderecoFormComponent} from "./component/endereco-form/endereco-form.component";

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'addcliente', component: ClienteFormComponent },
  { path: 'addcliente/:id', component: ClienteFormComponent },
  { path: 'enderecos', component: EnderecoListComponent },
  { path: 'addendereco', component: EnderecoFormComponent },
  { path: 'addendereco/:idCliente', component: EnderecoFormComponent },
  { path: 'addendereco/:idCliente/:id', component: EnderecoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
