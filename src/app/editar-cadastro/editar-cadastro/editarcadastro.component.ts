import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { EditarcadastroService } from '../services';
import { Formulario } from '../../shared';

@Component({
  selector: 'app-editarcadastro',
  templateUrl: './editarcadastro.component.html',
  styleUrls: ['./editarcadastro.component.css']
})
export class EditarcadastroComponent implements OnInit {

  @ViewChild('editarcadastroForm') editarcadastroForm!: NgForm;
  @ViewChild('cep') cepModel!: NgModel;
  @ViewChild('cidade') cidadeModel!: NgModel;
  @ViewChild('estado') estadoModel!: NgModel;
  @ViewChild('logradouro') logradouroModel!: NgModel;

  solicitado: boolean = false;
  usuario: Formulario = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    salario: '',
    cep: '',
    cidade: '',
    estado: '',
    logradouro: '',
    numero: '',
    complemento: ''
  };
  constructor(private editarcadastroService: EditarcadastroService) { }

  ngOnInit(): void {
    // Simulando carga inicial dos dados do usuário (exemplo)
    this.usuario = {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      cpf: '12345678900',
      telefone: '11987654321',
      salario: '5000',
      cep: '12345000',
      cidade: 'São Paulo',
      estado: 'SP',
      logradouro: 'Rua Exemplo',
      numero: '123',
      complemento: 'Apto 45'
    };
  }

  requestCep() : void {
    let cep = this.cepModel.value;
    this.editarcadastroService.getCep(cep).subscribe(
      (value : any) => {
        this.cidadeModel.control.setValue(value.localidade);
        this.estadoModel.control.setValue(value.uf);
        this.logradouroModel.control.setValue(value.logradouro);
      }
    )
  }

  salvarEdicao(form: NgForm): void {
    this.solicitado = true;
    console.log('Dados editados:', this.usuario);
    let dadosForm : Formulario = form.value;
    this.editarcadastroService.salvarEdicao(dadosForm);
  }
}
