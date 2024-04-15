import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro/autocadastro.component';
import { LoginComponent } from './login/login/login.component';
import { ClientesComponent, InserirEditarGerenteComponent, ListarGerenteComponent, TelaInicialComponent } from './administrador';
import { ConsultarTop3Component, TelaInicialGerenteComponent, ConsultarClienteComponent, ConsultarTodosComponent } from './gerente';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'autocadastro', component: AutocadastroComponent },
  {path:'login', component:  LoginComponent},

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
