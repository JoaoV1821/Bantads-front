import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent implements OnInit {

  gerentes: any[]  = [
    {nome: 'Pedro', nclientes: 3, saldoPositivo: 300, saldoNegativo: 400},
    {nome: 'João', nclientes: 5, saldoPositivo: 1300, saldoNegativo: 10},
    {nome: 'Rogerinho', nclientes: 4, saldoPositivo: 100000, saldoNegativo: 500000},
    {nome: 'Elon Musk', nclientes: 60, saldoPositivo: 999999, saldoNegativo: 999999},
    {nome: 'Razer A N R Montano', nclientes: 50, saldoPositivo: 999999, saldoNegativo: 0},
  ];

  ngOnInit(): void {
      
  }

}
