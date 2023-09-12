import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './pedido.model';

const apiUrl = 'http://localhost:8000/pedidos'
const apiOrdersUser = 'http://localhost:8000/orders/orderUser'

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor(private http: HttpClient) { }

  get(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(apiOrdersUser, {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    })
  }

  getById(id: number): Observable<Pedido>{
    const url = `${apiUrl}/?id=${id}`
    return this.http.get<Pedido>(url)
  }

  add(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(apiUrl, pedido)
  }

  update(id: number, pedido: Pedido): Observable<Pedido>{
    const url = `${apiUrl}/update/?id=${id}`
    return this.http.put<Pedido>(url, pedido)
  }

  delete(id: number): Observable<Pedido>{
    const url = `${apiUrl}/delete/?id=${id}`
    return this.http.delete<Pedido>(url)
  }
}
