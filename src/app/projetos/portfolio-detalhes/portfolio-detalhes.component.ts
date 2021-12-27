import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../model/item.model';
import {ItensService } from '../../services/itens.service';

@Component({
  selector: 'app-portfolio-detalhes',
  templateUrl: './portfolio-detalhes.component.html',
  styleUrls: ['./portfolio-detalhes.component.css']
})
export class PortfolioDetalhesComponent implements OnInit {

  public itens: Item = new Item();

  constructor(private rotaAtiva: ActivatedRoute,
    private ItensService: ItensService) { }

ngOnInit(): void {
  
  const codigo = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
  this.ItensService.getId(codigo).subscribe( (item: Item) => {
    this.itens = item;
  });
}
}
