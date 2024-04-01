import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro/autocadastro.component';
import { LoginComponent } from './login/login/login.component';
import { ClientesComponent, InserirEditarGerenteComponent, ListarGerenteComponent, TelaInicialComponent } from './administrador';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'autocadastro', component: AutocadastroComponent },
  {path:'login', component:  LoginComponent},

  //Administrador
  {path:'administrador', component: TelaInicialComponent},
  {path:'administrador/clientes', component: ClientesComponent},
  {path:'administrador/gerentes', component: ListarGerenteComponent},
  {path: 'administrador/gerentes/novo', component: InserirEditarGerenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
