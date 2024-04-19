import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrl: './consultar-extrato.component.css'
})

export class ConsultarExtratoComponent {
  esconderSaldo() {
    console.log("Botão clicado");
    const saldoElement = document.querySelector(".saldo span:last-child") as HTMLElement;
    if (saldoElement) {
      console.log("Elemento de saldo encontrado:", saldoElement);
      saldoElement.style.display = "none";
    } else {
      console.log("Elemento de saldo não encontrado");
    }
  }
  
}