export class Usuario{


    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public endereco: string;
    public cidade: string;
    public estado: string;
    public numero: string; 

    constructor()

    constructor(id?: number, nome?: string, email?:string, senha?: string,
        endereco?: string, cidade?: string, estado?: string, numero?: string){

        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.senha = senha || '';
        this.endereco = endereco || '';
        this.cidade = cidade || '';
        this.estado = estado || '';
        this.numero = numero || '';
    }


}