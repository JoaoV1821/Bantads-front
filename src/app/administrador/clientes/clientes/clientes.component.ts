import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes: any[]  = [
    {nome:'Pedro II', cpf: '101.101.101-11', limite: 3000, gerente: 'Pedro', saldo: 1},
    {nome:'Maria Silva', cpf: '202.202.202-22', limite: 5000, gerente: 'Ana', saldo: 2500},
    {nome:'João Santos', cpf: '303.303.303-33', limite: 4000, gerente: 'Lucas', saldo: 3500},
    {nome:'Ana Oliveira', cpf: '404.404.404-44', limite: 6000, gerente: 'Juliana', saldo: 2000},
    {nome:'Luiza Pereira', cpf: '505.505.505-55', limite: 4500, gerente: 'Gabriel', saldo: 4000},
    {nome:'Carlos Souza', cpf: '606.606.606-66', limite: 3500, gerente: 'Fernanda', saldo: 300}
];

}
