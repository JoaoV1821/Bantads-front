import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro/autocadastro.component';
import { LoginComponent } from './login/login/login.component';
import { ClientesComponent, InserirEditarGerenteComponent, ListarGerenteComponent, TelaInicialComponent } from './administrador';
import { ConsultarTop3Component, TelaInicialGerenteComponent, ConsultarClienteComponent, ConsultarTodosComponent } from './gerente';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { DepositoComponent } from './deposito/deposito.component';

import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'autocadastro', component: AutocadastroComponent },
  {path:'login', component:  LoginComponent},

  
  {path: 'saque', component: SaqueComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'deposito', component: DepositoComponent},

  {path: 'extrato', component: ConsultarExtratoComponent},
  {path: 'consultar-extrato', component: ConsultarExtratoComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  
  //Administrador
  {path:'administrador', component: TelaInicialComponent},
  {path:'administrador/clientes', component: ClientesComponent},
  {path:'administrador/gerentes', component: ListarGerenteComponent},
  {path: 'administrador/gerentes/:id', component: InserirEditarGerenteComponent},

  //Gerentes
  {path:'gerente', component: TelaInicialGerenteComponent},
  {path:'gerente/consultar', component: ConsultarClienteComponent},
  {path:'gerente/consultar-todos', component: ConsultarTodosComponent},
  {path:'gerente/consultar-top3', component: ConsultarTop3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
