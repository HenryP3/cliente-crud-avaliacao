import {Component, Input, OnInit} from '@angular/core';
import { EnderecoModel } from '../../model/endereco-model';
import { EnderecoService } from '../../service/endereco-service.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html'
})
export class EnderecoListComponent implements OnInit {

  @Input() idCliente: number;
  disableAdiciona;
  enderecos: EnderecoModel[];

  constructor(private route: ActivatedRoute, private router: Router, private enderecoService: EnderecoService) {
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.idCliente) {
        this.listar();
      }
    }, 300);
  }

  listar() {
    this.enderecoService.findAll(this.idCliente).subscribe(data => {
      this.enderecos = data;
    });
  }

  adicionar() {
    this.router.navigate(['/addendereco/' + this.idCliente ]);
  }

  editar(id: number) {
    this.router.navigate(['/addendereco/' + this.idCliente + '/' + id]);
  }

  excluir(id: number) {
    this.enderecoService.delete(id).subscribe(data => {
      this.listar();
    });
  }

}
