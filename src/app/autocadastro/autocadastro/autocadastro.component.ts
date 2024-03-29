import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild, OnInit } from '@angular/core';
import { AutocadastroService } from '../services';
import { Formulario } from '../../shared';
@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrl: './autocadastro.component.css'
})

export class AutocadastroComponent implements OnInit{

  @ViewChild('autocadastroForm') autocadastroForm!: NgForm;

  cep! : string;
  logradouro! : string;
  cidade! : string;
  estado! : string;
  complemento! : string;
  numero! : string;

  solicitado : boolean = false;

  constructor(
    private autocadastroService : AutocadastroService
  ){}

  ngOnInit(): void { 
    this.solicitado = false;
  }

  requestCep() : void {
    let cep = this.cep;
    this.autocadastroService.getCep(cep).subscribe(
      (value : any) => {
        this.logradouro = value.logradouro;
        this.cidade = value.localidade;
        this.estado = value.uf;
        this.complemento = value.complemento;
      }
    )
  }

  solicitarCadastro(form: NgForm) {
    this.solicitado = true;    
    let dadosForm : Formulario = form.value;
    this.autocadastroService.solicitarCadastro(dadosForm);
  }
}
