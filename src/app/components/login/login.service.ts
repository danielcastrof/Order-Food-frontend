import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login.model';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8000/login'
const url = 'http://localhost:8000/'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<Login> {
    console.log('asdasd')
    return this.http.post<Login>(`${apiUrl}`, login)
  }

}