import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './item.model';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8000/item'
const url = 'http://localhost:8000/'

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private http: HttpClient) { }

  get(): Observable<Item[]> {
    return this.http.get<Item[]>(`${apiUrl}`)
  }

  getById(id: string): Observable<Item> {
    return this.http.get<Item>(`${apiUrl}${id}`)
  }

  add(item: Item): Observable<Item> {
    return this.http.post<Item>(`${apiUrl}`, item)
  }

  addToOrder(item: Item): Observable<Item> {
    return this.http.post<Item>(`${url}/pedidos`, item)
  }

  update(id: string, item: Item): Observable<Item> {
    return this.http.put<Item>(`${apiUrl}/${id}`, item)
  }

  delete(id: string): Observable<Item> {
    var headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete<Item>(`${apiUrl}/${id}`, {headers, responseType: 'text' as 'json'})
  }
}
