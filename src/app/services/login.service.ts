import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Login } from '../models/login.model';
import { Perfil } from '../enums/perfil-usuario';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpHeaderService{

  perfil: Perfil;

  LS_CHAVE: string = "usuario";


  constructor(protected http: HttpClient) {
    super();
  }

  public get usuarioLogado():Usuario{
    let usuario = localStorage[this.LS_CHAVE];
    return (usuario ? JSON.parse(localStorage[this.LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario){
    this.usuarioLogado.perfil = this.usuarioLogado.perfil[0].toUpperCase() + this.usuarioLogado.perfil.substring(1);    
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  public verificarLogin(loginUsuario: string):Observable<any>{

    let usuario = {
      login: loginUsuario
    }

    return this.http.post(this.baseUrl + 'auth/verificarLogin', usuario,this.httpOptions);
  }

  public login(login:Login): Observable<any>{    

    return this.http.post(this.baseUrl + 'auth/login',login,this.httpOptions);
  }

  logout(){
    delete localStorage['LS_CHAVE'];
  }

}
