import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItensService } from './../services/itens.service';
import { Item } from './../model/item.model';
import { AutenticacaoService } from './../services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public opcao: Item = new Item();

  public exibirMenu = false;

  constructor(/*private rotaAtiva: ActivatedRoute,
              private itens: ItensService,*/
              private auth: AutenticacaoService) { }

  ngOnInit(): void {
    this.auth.menu.subscribe((mensagem)=>{
      console.log(mensagem);
      this.exibirMenu = mensagem;
    });

    /*const codigo = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
    this.itens.getId(codigo).subscribe( (item: Item) => {
      this.opcao = item;
    });
    */
  }
  

}
