import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItensService } from '../../services/itens.service';
import { Item } from 'src/app/model/item.model';


@Component({
  selector: 'app-portfolio-info',
  templateUrl: './portfolio-info.component.html',
  styleUrls: ['./portfolio-info.component.css']
})
export class PortfolioInfoComponent implements OnInit {

  public item: Item = new Item();

  constructor(private ItensService: ItensService,
              private rota: Router) { }

  ngOnInit(): void {
  }

  public adicionar() {

    if (this.item.colecao) {
      this.ItensService.adicionar(this.item).subscribe((resultado)=>{
        console.log(resultado);
        this.rota.navigate(['/painel']);
      });
    } 
  }
  
}
