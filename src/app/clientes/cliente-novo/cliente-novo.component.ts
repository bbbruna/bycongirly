import { Component, OnInit } from '@angular/core';

import { clientes } from 'src/app/model/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {

  public cliente: clientes = new clientes(); 

  constructor(private clienteService: ClientesService) {

   }

  ngOnInit(): void {
  }

  public cadastrarCliente(){
    this.clienteService.adicionar(this.cliente).subscribe((cliente: clientes)=>{
      console.log(cliente);

      this.clienteService.clienteAtt.emit(true);

    });
  }

}
