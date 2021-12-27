import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {HttpClientModule} from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioCapaComponent } from './portfolio-capa/portfolio-capa.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';

import { RegistrarComponent } from './registrar/registrar.component';
import { ProjetosModule } from './projetos/projetos.module';
import { DesenhosComponent } from './desenhos/desenhos.component';
import { PainelComponent } from './painel/painel.component';

import { ClientesModule } from './clientes/clientes.module'

//import { PortfolioDetalhesComponent } from './portfolio-detalhes/portfolio-detalhes.component';
//import { PortfolioInfoComponent } from './projetos/portfolio-info/portfolio-info.component';
//import { PortfolioEditarComponent } from './projetos/portfolio-editar/portfolio-editar.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PortfolioCapaComponent,
    LoginComponent,
    SobreComponent,
    //PortfolioInfoComponent,
    DesenhosComponent,
    //PortfolioEditarComponent,
    RegistrarComponent,
    PainelComponent
   // PortfolioDetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    IvyCarouselModule,
    ProjetosModule,
    ClientesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
