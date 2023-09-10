import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css']
})

export class GetItemComponent implements OnInit {

  @Input() "item": { id?: string, nome: string; categoria: string; descricao: string; imagem: string; valorDeVenda: number; quantidadeEmEstoque: number; };

  public "listItems": Item[];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  id = this.route.snapshot.paramMap.get('id')!

  ngOnInit(): void {
    this.itemService.get().subscribe( itemsResponse => {
      this.listItems = itemsResponse;
      console.log(itemsResponse);
    },
      error => console.log(error)
    );
  }

  deleteItem(id?: string): void {
    this.itemService.delete(id!).subscribe( deleteResponse => {
      alert("Item removido com sucesso!");
      this.router.navigate(['/home']);
    },
      error => console.log(error));
  }
}


// ---------------------------
// import { Injectable, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Login } from './login.model';
// import { Observable } from 'rxjs';

// const apiUrl = 'http://localhost:8000/login'
// const url = 'http://localhost:8000/'

// @Injectable({
//   providedIn: 'root'
// })

// export class LoginService {

//   constructor(private http: HttpClient) { }

//   logar(login: Login): Observable<Login> {
//     return this.http.post<Login>(`${apiUrl}`, login)
//   }

// }
// --------------



// import { Injectable } from "@angular/core";

// export interface Login {
//     email: string;
//     password: string;
// }
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from './login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit {

//   constructor(private loginService: LoginService, private router: Router) { }

//   ngOnInit(): void {
//     // @Input() "login": { email: string; password: string; };

//     // public "listItem
// <main class="form-signin w-100 m-auto">
//     <form>
//         <img class="mb-4" src="https://cdn0.iconfinder.com/data/icons/food-delivery-27/512/food-order-hand-phone-512.png" alt="" width="72" height="57">
//         <h1 class="h3 mb-3 fw-normal">Faça seu login</h1>

//         <div class="form-floating">
//             <input type="email" class="form-control" placeholder="email@exemplo.com">
//             <label for="floatingInput">Email</label>
//         </div>
//             <div class="form-floating">