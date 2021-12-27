import { DatePipe } from "@angular/common";

export class clientes {
    public id: number;
    public nome: string;
    public email: string;
    public endereco: string;
    public contato: string; 
    public cidade: string;
    public estado: string;
    public briefing: string;
    public redeSociais: string;
    public medidas: string;
    public linkReuniao: string;
    public cep: string;
    public orcamentoFinal: number;
    public data: string; 

    constructor()

    constructor(id?: number,  nome?: string, email?:string,
        endereco?: string, cidade?: string, estado?: string, contato?: string,
        briefing?: string, redesSociais?: string, medidas?: string, linkReuniao?: string,
        cep?: string, orcamentoFinal?: number, data?: string){

        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.contato = contato || '';
        this.endereco = endereco || "";
        this.cidade = cidade || '';
        this.estado = estado || '';
        this.briefing = briefing || ''; 
        this.redeSociais = redesSociais || '';
        this.medidas = medidas || '';
        this.linkReuniao = linkReuniao || '';
        this.cep = cep || '';
        this.orcamentoFinal = orcamentoFinal || 0;
        this.data = data || '';
    }
}