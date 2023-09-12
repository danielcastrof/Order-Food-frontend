import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Home } from './home.model';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8000/orders'
const url = 'http://localhost:8000/'

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }
 
  createOrder(): Observable<Home> {
    return this.http.post<Home>(`${apiUrl}`, {"qtd": 1, "obs": "Sem obs"}, {
      headers: {
        Authorization: 'Bearer '+ window.localStorage.getItem('token')
      }
    })
  }
}