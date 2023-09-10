import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

const apiUrl = 'http://localhost:8000/users/user'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  get(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl)
  }

  getById(id: string): Observable<User>{
    const url = `${apiUrl}/?id=${id}`
    return this.http.get<User>(url)
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(apiUrl, user)
  }

  update(id: string, user: User): Observable<User>{
    const url = `${apiUrl}/update/?id=${id}`
    return this.http.put<User>(url, user)
  }

  delete(id: string): Observable<User>{
    const url = `${apiUrl}/delete/?id=${id}`
    return this.http.delete<User>(url)
  }
}
