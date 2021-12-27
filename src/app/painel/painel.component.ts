import { Component, OnInit } from '@angular/core';

import { ItensService } from 'src/app/services/itens.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public projetosLista: Item[] = []; 

  constructor(private ItensServ: ItensService) { }

  ngOnInit(): void {
    this.atualizarDados();
  }

  public atualizarDados(){
    this.ItensServ.getArray().subscribe((itens: Item[])=>{
      this.projetosLista = itens;
    });
  }

  public excluir(id: number){
    this.ItensServ.excluir(id).subscribe((att)=>{    
      this.atualizarDados();
    });
  }

}
