import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './component/cliente-form/cliente-form.component';
import { ClienteService } from './service/cliente-service.service';
import { EnderecoListComponent } from './component/endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './component/endereco-form/endereco-form.component';
import {EnderecoService} from "./service/endereco-service.service";
import {NgxViacepModule} from "@brunoc/ngx-viacep";

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteFormComponent,
    EnderecoListComponent,
    EnderecoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxViacepModule
  ],
  providers: [ClienteService, EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
