import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-gerente',
  templateUrl: './listar-gerente.component.html',
  styleUrl: './listar-gerente.component.css'
})
export class ListarGerenteComponent {

  gerentes: any[]  = [
    {nome: 'Pedro', cpf: '101.101.101-11', email: 'pedro3@gmail.com', telefone: 41987654321},
    {nome: 'Ana Maria', cpf: '202.202.202-22', email: 'ana_maria@hotmail.com', telefone: 41912345678},
    {nome: 'João Carlos', cpf: '303.303.303-33', email: 'joao.carlos@yahoo.com', telefone: 41923456789},
    {nome: 'Mariana Silva', cpf: '404.404.404-44', email: 'mariana_silva@gmail.com', telefone: 41934567890}

  ];

}
