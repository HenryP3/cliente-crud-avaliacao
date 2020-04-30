import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../service/cliente-service.service';
import { Cliente } from '../../model/cliente';
import {EnderecoListComponent} from "../endereco-list/endereco-list.component";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit {

  // @ts-ignore
  @ViewChild(EnderecoListComponent) enderecoListComponent: EnderecoListComponent;

  cliente: Cliente;
  sub;

  constructor(private route: ActivatedRoute, private router: Router, private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.cliente = new Cliente();
    this.enderecoListComponent.disableAdiciona = true;
    this.sub = this.route.paramMap.subscribe(params => {
      if (params.get('id') !== null) {
        this.clienteService.editar(+params.get('id')).subscribe(data => {
          this.cliente = data;
          this.enderecoListComponent.disableAdiciona = false;
        });
      }
    });
  }

  onSubmit() {
    this.clienteService.save(this.cliente).subscribe(result => this.gotoClienteList());
  }

  gotoClienteList() {
    this.router.navigate(['/clientes']);
  }
}
