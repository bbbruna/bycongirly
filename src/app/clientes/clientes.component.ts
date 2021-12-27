import { Component, OnInit } from '@angular/core';
import { ClientesService} from 'src/app/services/clientes.service';
import { clientes } from 'src/app/model/clientes.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public data: number = Date.now();

  public cliente: clientes[] = [];

  constructor(private clienteService: ClientesService) { 

    this.clienteService.clienteAtt.subscribe((aviso)=>{
      if(aviso){
        this.carregarDados();
      }
    });
    
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  public carregarDados() {
    this.clienteService.getAll().subscribe((clientes: clientes[])=>{
      this.cliente = clientes;
    });
  }
}
