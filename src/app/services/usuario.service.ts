import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './../model/usuario.model';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    constructor(private http: HttpClient) {}

    public getUser(usuario: Usuario): Observable<Usuario[]>{
        return this.http.get<Usuario[]>('http://localhost:3000/usuario?email=' + usuario.email + '&senha=' + usuario.senha);
    }

    public adicionar(usuario: Usuario): Observable<any>{

        const userJson = JSON.stringify(usuario);
        return this.http.post('http://localhost:3000/usuario', userJson, httpOptions);
    }

}