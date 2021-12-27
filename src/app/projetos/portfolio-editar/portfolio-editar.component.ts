import { Component, OnInit } from '@angular/core';
import { ItensService } from '../../services/itens.service';

import { Item } from 'src/app/model/item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-editar',
  templateUrl: './portfolio-editar.component.html',
  styleUrls: ['./portfolio-editar.component.css']
})


export class PortfolioEditarComponent implements OnInit {

  public item: Item = new Item();

  constructor(private rotaA: ActivatedRoute,
              private itemService: ItensService,
              private rota: Router) { }

  ngOnInit(): void {

    const codigo: number = Number(this.rotaA.snapshot.paramMap.get('id'));

    this.itemService.getId(codigo).subscribe((item)=> {
      this.item = item;
    });

  }

  public atualizar() {
    if (this.item.id) {
      this.itemService.atualizar(this.item).subscribe((resposta)=>{
        console.log(resposta);
        this.rota.navigate(['/painel']);
      });
    }
  }



}
