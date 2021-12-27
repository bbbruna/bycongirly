import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from 'src/app/services/clientes.service';
import { clientes } from 'src/app/model/clientes.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  public valorGasto: number = 190;

  public cliente: clientes = new clientes();

  constructor(private clienteService: ClientesService, 
    private rotaA: ActivatedRoute,
    private rota: Router) { }

  ngOnInit(): void {

    const id = Number(this.rotaA.snapshot.paramMap.get('id'));

    this.clienteService.getById(id).subscribe((cliente: clientes)=>{
      this.cliente = cliente;
    });

  }

  public editar(){
    this.clienteService.update(this.cliente).subscribe((resposta)=>{
      console.log(resposta);
      this.clienteService.clienteAtt.emit(true);
      this.rota.navigate(['/clientes']);
    });
  }

  public deletar(){
    this.clienteService.delete(this.cliente.id).subscribe((resposta)=>{
      console.log(resposta);
      this.clienteService.clienteAtt.emit(true);
      this.rota.navigate(['/clientes']);
    });
  }

}
