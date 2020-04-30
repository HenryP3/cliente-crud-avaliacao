import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../service/cliente-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    });
  }

  editar(id: number) {
    this.router.navigate(['/addcliente/', id]);
  }

  excluir(id: number) {
    this.clienteService.delete(id).subscribe(data => {
      this.listar();
    });
  }

}
