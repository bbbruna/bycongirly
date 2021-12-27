import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItensService } from './../services/itens.service';
import { Item } from './../model/item.model';

@Component({
  selector: 'app-desenhos',
  templateUrl: './desenhos.component.html',
  styleUrls: ['./desenhos.component.css']
})
export class DesenhosComponent implements OnInit {

  public desenho: Item = new Item();
  public exibir: boolean = false;

  constructor(private rotaAtiva: ActivatedRoute,
              private itens: ItensService) { }

  ngOnInit(): void {

    const codigo = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
    this.itens.getId(codigo).subscribe( (item: Item) => {
      this.desenho = item;
    });
  }

  public exibirElemento(){
    this.exibir = (!this.exibir);
  }
  
}
