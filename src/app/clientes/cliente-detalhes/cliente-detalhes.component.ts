import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientesService } from 'src/app/services/clientes.service';
import { clientes } from 'src/app/model/clientes.model';


@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {

  public data: number = Date.now();

  public cliente: clientes = new clientes();

 
  constructor(private clienteServ: ClientesService, 
    private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.rotaAtiva.params.subscribe((parametros)=>{
      const id: number = Number(parametros['id']);

      this.clienteServ.getById(id).subscribe((cliente: clientes)=>{
        this.cliente = cliente;
      });
    });
   
  }

}
