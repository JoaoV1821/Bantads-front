import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial/tela-inicial.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { InserirEditarGerenteComponent } from './gerente/inserir-editar-gerente/inserir-editar-gerente/inserir-editar-gerente.component';
import { ListarGerenteComponent } from './gerente/listar-gerente/listar-gerente/listar-gerente.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TelaInicialComponent,
    ClientesComponent,
    InserirEditarGerenteComponent,
    ListarGerenteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class AdministradorModule { }
