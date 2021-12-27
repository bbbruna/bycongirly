import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../model/usuario.model';


@Injectable({
    providedIn: 'root'
})

export class AutenticacaoService{

    private autenticar: boolean = false;

    public menu = new EventEmitter<boolean>();

    constructor(private rota: Router,
                private user: UsuarioService){}


    public login(usuario: Usuario){

        this.user.getUser(usuario).subscribe((usuarioAuth: Usuario[])=>{

            const [user] = usuarioAuth;

            if(user.email){
                this.autenticar = true;
                this.menu.emit(true);
                this.rota.navigate(['/home']);
            }
        })
       
    }

    public isAutenticado(): boolean{
        return this.autenticar;
    }

}