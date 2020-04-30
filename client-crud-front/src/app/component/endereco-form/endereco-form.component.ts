import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../../service/endereco-service.service';
import { EnderecoModel } from '../../model/endereco-model';
import {Endereco, ErroCep, NgxViacepService} from "@brunoc/ngx-viacep";

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html'
})
export class EnderecoFormComponent implements OnInit {

  idCliente: number;
  id: number;
  endereco: EnderecoModel;
  sub;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private enderecoService: EnderecoService,
              private viacep: NgxViacepService) {
  }

  ngOnInit() {
    this.endereco = new EnderecoModel();
    this.sub = this.route.paramMap.subscribe(params => {
      this.idCliente = +params.get('idCliente');
      if (params.get('id') !== null) {
        this.enderecoService.editar(+params.get('id')).subscribe(data => {
          this.endereco = data;
        });
      }
    });
  }

  onSubmit() {
    this.endereco.cliente = this.idCliente;
    this.enderecoService.save(this.endereco).subscribe(result => this.gotoEnderecoList());
  }

  gotoEnderecoList() {
    this.router.navigate(['/addcliente/', this.idCliente]);
  }

  buscarCep() {
    this.viacep.buscarPorCep(this.endereco.cep).then( ( enderecoCep: Endereco ) => {
      this.endereco.cep = enderecoCep.cep;
      this.endereco.logradouro = enderecoCep.logradouro;
      this.endereco.bairro = enderecoCep.bairro;
      this.endereco.cidade = enderecoCep.localidade;
      this.endereco.uf = enderecoCep.uf;
      this.endereco.ibge = enderecoCep.ibge;
    }).catch( (error: ErroCep) => {
      console.log(error.message);
    });
  }
}
