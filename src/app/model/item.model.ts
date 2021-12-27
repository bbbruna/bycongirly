export class Item{

    public id: number;
    public logo: string;
    public imagem: string;
    public imagem2: string;
    public colagem: string;
    public colecao: string;
    public descricao: string;

   
    constructor() 

    constructor(id?: number, logo?: string, imagem?: string, imagem2?: string, colagem?: string,
        colecao?: string, descricao?: string){

            this.id = id || 0;
            this.logo = logo || '';
            this.imagem = imagem || '';
            this.imagem2 = imagem2 || '';
            this.colagem = colagem || '';
            this.colecao = colecao || '';
            this.descricao = descricao || '';
    }

}