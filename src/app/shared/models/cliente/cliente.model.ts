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
