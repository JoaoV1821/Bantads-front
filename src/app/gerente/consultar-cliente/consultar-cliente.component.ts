import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.css'
})
export class ConsultarClienteComponent implements OnInit {

  pesquisado: Boolean = false;

  ngOnInit(): void {
      this.pesquisado = false;
  }

  handlePesquisa() : void {
    this.pesquisado = !this.pesquisado;
  }

}
