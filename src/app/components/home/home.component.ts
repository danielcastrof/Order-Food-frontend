import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  id_order: any;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
  }

  createOrder(): void {
    this.homeService.createOrder().subscribe(
      (res) => {
        this.id_order = res;
        window.localStorage.setItem('id_order', this.id_order["id"]);
      },
      error => {
        console.log('Erro no criar pedido:', error);
      }
    );
  }

}
