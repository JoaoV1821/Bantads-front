import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialGerenteComponent } from './tela-inicial-gerente/tela-inicial-gerente.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TelaInicialGerenteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class GerenteModule { }
