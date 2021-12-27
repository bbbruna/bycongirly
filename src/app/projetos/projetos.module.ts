import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjetosRoutingModule } from './projetos-routing.module';

import { ProjetosComponent } from './projetos.component';
import { PortfolioInfoComponent } from './portfolio-info/portfolio-info.component';
import { PortfolioEditarComponent } from './portfolio-editar/portfolio-editar.component';
import { PortfolioDetalhesComponent } from './portfolio-detalhes/portfolio-detalhes.component';

@NgModule({
    declarations: [
        ProjetosComponent,
        PortfolioInfoComponent,
        PortfolioEditarComponent,
        PortfolioDetalhesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProjetosRoutingModule
    ],
    providers: []
})

export class ProjetosModule {}