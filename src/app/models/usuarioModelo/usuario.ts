import { IUsuario } from "./i-usuario";
import * as crypto from "crypto-js";

export class Usuario implements IUsuario {
    private _id: string | undefined;
    get id() { return this._id; }
    set id(value) {
        if (this._id === value) return;
        this._id = value;
    }
    private _nomeUsuario: string | undefined;
    get nomeUsuario() { return this._nomeUsuario; }
    set nomeUsuario(value) {
        if (this._nomeUsuario === value) return;
        this._nomeUsuario = value;
    }
    private _email: string | undefined;
    get email() { return this._email; }
    set email(value) {
        if (this._email === value) return;
        this._email = value;
    }
    private _telefone: string | undefined;
    get telefone() { return this._telefone; }
    set telefone(value) {
        if (this._telefone === value) return;
        this._telefone = value;
    }
    private _senha: string | undefined;
    get senha() { return this._senha; }
    set senha(value) {
        if (this._senha === value) return;
        let cont = crypto.SHA1(value as string);
        this._senha = cont.toString();
    }

    constructor(data?: IUsuario) {
        if (data) this.fromRaw(data);
    }

    fromRaw(data: IUsuario) {
        this.id = data.id;
        this.nomeUsuario = data.nomeUsuario;
        this.email = data.email;
        this.telefone = data.telefone;
        this.senha = data.senha;
    }

    toJSON() {
        return {
            id: this.id,
            nomeUsuario: this.nomeUsuario,
            email: this.email,
            telefone: this.telefone,
            senha: this.senha,
        }
    }


}