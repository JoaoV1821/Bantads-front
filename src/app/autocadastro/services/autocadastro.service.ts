import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class AutocadastroService {

  constructor(
    private http : HttpClient
  ) { }

  getCep(cep: string) : any {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
        "Content-Type": 'application/json'
      }
    });
  }

  solicitarCadastro(cliente : Cliente){
    console.log('solicitarCadastro(cliente) :: autocadastro.service');
    console.log(cliente);
  }

}
