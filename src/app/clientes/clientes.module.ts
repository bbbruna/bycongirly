import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteGuardService } from 'src/app/auth/cliente-guard.service';


import { ClientesRoutingModule }  from './clientes-routing.model'
import { ClientesComponent } from './clientes.component';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component'

@NgModule({
    declarations: [
        ClientesComponent,
        ClienteNovoComponent,
        ClienteUpdateComponent,
        ClienteDetalhesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ClientesRoutingModule
    ],
    providers: [
        ClientesService,
        ClienteGuardService
    ]
})

export class ClientesModule {

}
