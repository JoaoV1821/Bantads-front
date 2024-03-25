import { Endereco } from "../endereco";

export class Cliente {

    constructor(
        public nome?: string,
        public cpf?: string,
        public telefone?: string,
        public email?: string,
        public salario?: string,
        public endereco?: Endereco
    ) { }
}

export interface Formulario {
   
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    salario: string,
    cep: string,
    cidade: string,
    estado: string,
    logradouro: string,
    numero: string,
    complemento: string
    
}