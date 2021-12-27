import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

import { PortfolioCapaComponent } from './portfolio-capa/portfolio-capa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { DesenhosComponent } from './desenhos/desenhos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PainelComponent } from './painel/painel.component';

//import { PortfolioInfoComponent } from './projetos/portfolio-info/portfolio-info.component';
//import { PortfolioEditarComponent } from './projetos/portfolio-editar/portfolio-editar.component';

const routes: Routes = [

    {
      path: 'portfolio',
      component: PortfolioCapaComponent
    },

    {
      path: 'home',
      component: HomeComponent
    },

    {
      path: 'login',
      component: LoginComponent 
    },

    {
      path: 'registrar',
      component: RegistrarComponent
    },

    {
      path: 'info',
      component: SobreComponent
    },

    {
      path:'projetos',
      loadChildren: ()=>import('src/app/projetos/projetos.component').then((modulo)=> 
      modulo.ProjetosComponent),
      canActivate: [AuthGuardService]
    },

    {
      path: 'desenhos/:id', 
      component: DesenhosComponent
    },

    {
      path: 'painel',
      component: PainelComponent,
      canActivate: [AuthGuardService]
    },
    
  {
    path: 'cliente',
    loadChildren: ()=>import('src/app/clientes/clientes.module').then((modulo)=> 
    modulo.ClientesModule),
    canActivate: [AuthGuardService]
    },
    {
      path: 'clientes',
      loadChildren: ()=>import('src/app/clientes/clientes.module').then((modulo)=> 
      modulo.ClientesModule),
      canActivate: [AuthGuardService]
      },

    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }
/*
    {
      path: 'portfolio-info',
      component: PortfolioInfoComponent,
      canActivate: [AuthGuardService]
    },

    {
      path: 'portfolio-editar',
      component: PortfolioEditarComponent,
      canActivate: [AuthGuardService]
    },
    */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
