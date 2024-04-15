import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services';
import { Cliente } from '../../shared';

@Component({
  selector: 'app-consultar-todos',
  templateUrl: './consultar-todos.component.html',
  styleUrl: './consultar-todos.component.css'
})
export class ConsultarTodosComponent implements OnInit{
  
  clientes : Cliente[] = [];

  constructor(
    private gerenteService : GerenteService
  ) {}

  ngOnInit(): void {
      this.gerenteService.insertClientes();
      this.clientes = this.listarTodosClientes();
  }

  listarTodosClientes() : Cliente[] {
    return this.gerenteService.listarTodosClientes();
  }

  handlePesquisa() : void {
    
  }

}
