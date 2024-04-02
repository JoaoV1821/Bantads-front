import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from './directives/numerico/numerico.directive';
import { CaixaAltaPipe } from './pipes/caixa-alta/caixa-alta.pipe';




@NgModule({
  declarations: [
    NumericoDirective,
    CaixaAltaPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NumericoDirective
  ]
})
export class SharedModule { }
