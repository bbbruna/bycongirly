import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './../services/autenticacao.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AutenticacaoService, private router: Router) {}

  public canActivate(router: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | boolean {

  console.log('aqui');

      if(this.auth.isAutenticado()){
        return true;
      }

      this.router.navigate(['/login']);
      return false;
  }

}
