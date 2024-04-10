import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services';
import { Cliente } from '../../shared';

@Component({
  selector: 'app-tela-inicial-gerente',
  templateUrl: './tela-inicial-gerente.component.html',
  styleUrl: './tela-inicial-gerente.component.css'
})
export class TelaInicialGerenteComponent implements OnInit{
  
  clientes : Cliente[] = [];
  motivo : boolean = false;

  constructor(
    private gerenteService : GerenteService
  ) {}
  
  ngOnInit(): void {
    this.gerenteService.insertClientes();
    this.clientes = this.listarTodosClientes();
    console.log(this.clientes);
  }

  listarTodosClientes() : Cliente[] {
    return this.gerenteService.listarTodosClientes();
  }

  aprovarCliente(cliente : Cliente) : void {
    this.gerenteService.removerCliente(cliente.id!);
    this.clientes = this.gerenteService.listarTodosClientes();
  }

  togglerejeicao(cliente: Cliente): void {
    if (cliente.rejeicao === undefined) {
      this.resetMotivoRejeicao();
      cliente.rejeicao = '';
    } else {
      cliente.rejeicao = undefined;
    }
  }

  resetMotivoRejeicao(): void {
    this.clientes.forEach(cliente => cliente.rejeicao = undefined);
  }

  rejeitarCliente(cliente: Cliente): void {
    if (cliente.rejeicao !== null && cliente.rejeicao?.trim() !== '') {
      this.gerenteService.removerCliente(cliente.id!);
      this.clientes = this.gerenteService.listarTodosClientes();
    }
  }
}
