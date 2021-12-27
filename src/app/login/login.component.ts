import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from './../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private auth: AutenticacaoService) { }

  ngOnInit(): void {
  }

  public efetuarLogin(formulario: any){
    console.log(formulario);
    //this.auth.login(this.usuario);

      if(formulario.valid){
        this.auth.login(this.usuario);
      }
  }

}
