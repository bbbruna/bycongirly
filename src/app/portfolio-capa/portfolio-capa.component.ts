import { Component, OnInit } from '@angular/core';
import { ItensService } from './../services/itens.service';
import {Item} from './../model/item.model';

@Component({
  selector: 'app-portfolio-capa',
  templateUrl: './portfolio-capa.component.html',
  styleUrls: ['./portfolio-capa.component.css']
})
export class PortfolioCapaComponent implements OnInit {

  public opcaoLista: Array<any> = [];

  public indice: number = 1;
  public quantItens: number = 3;
  public totalItens: number = 0;
  public proximo: boolean = false;
  public paginas: any[] = [];


  constructor(private itens: ItensService) { }

  ngOnInit(): void {
   /* this.itens.getArray().subscribe( (item: Item[]) => {
       this.opcaoLista = item;
    });*/
   
    this.itens.pagina(this.indice, this.quantItens).subscribe((resposta)=>{

      console.log(resposta);
      console.log(resposta.body);
      console.log(resposta.headers.get('X-Total-Count'));

      this.totalItens = Number(resposta.headers.get('X-Total-Count'));

      this.gerarIndice();

      let value = JSON.stringify(resposta.body);
      let lista: any[] = JSON.parse(value);

      this.opcaoLista = lista.map((obj)=>{
        return {
         id: obj.id,
         imagem: obj.imagem,
         logo: obj.logo
        }
      });


      if (this.indice < Math.ceil(this.totalItens/this.quantItens)) {
        this.proximo = true;
      }
      else {
        this.proximo = false;
      }

    });
  }

  public gerarIndice() {
    let maxPaginas = Math.ceil(this.totalItens/this.quantItens);

    for (let i=1; i<=maxPaginas; i++) {
      if (this.indice === i) {
        this.paginas.push({
          id: i,
          ativa: true
        });
      } else {
        this.paginas.push({
          id: i,
          ativa: false
        });
      }
    }
  }

  public mudarPaginar(pagina: number) {
    this.indice = pagina;

    this.itens.pagina(this.indice, this.quantItens).subscribe((resposta)=>{
      this.totalItens = Number(resposta.headers.get('X-Total-Count'));

      let value = JSON.stringify(resposta.body);
      let lista: any[] = JSON.parse(value);

      this.opcaoLista = lista.map((obj)=>{
        return {
         id: obj.id,
         imagem: obj.imagem,
         logo: obj.logo
        }
      });


      if (this.indice < Math.ceil(this.totalItens/this.quantItens)) {
        this.proximo = true;
      }
      else {
        this.proximo = false;
      }

    })
  }
}


  





  


  

