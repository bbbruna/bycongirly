import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioInfoComponent } from './portfolio-info/portfolio-info.component';
import { PortfolioEditarComponent } from './portfolio-editar/portfolio-editar.component';
import { PortfolioDetalhesComponent } from './portfolio-detalhes/portfolio-detalhes.component';

import { ProjetosComponent } from './projetos.component';

const routes: Routes = [
    {
        path: '',
        component: ProjetosComponent,
        children: [
            {
                path:  'portfolio-info',
                component: PortfolioInfoComponent
            },
            {
                path:  'editar/:id',
                component: PortfolioEditarComponent
            },
            {
                path:  'portfolio-detalhes/:id',
                component: PortfolioDetalhesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjetosRoutingModule{

}