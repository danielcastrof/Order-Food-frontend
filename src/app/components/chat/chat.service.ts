import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from './chat.model';

const apiUrl = 'http://localhost:8000/gpt'

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private http: HttpClient) { }

  sendMessage(info: {}): Observable<{}> {
    console.log('desgraca')
    return this.http.post<{}>(apiUrl, info)
  }
}
