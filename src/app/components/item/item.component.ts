import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from './item.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //email: string = '';
  itemId: string = '';
  orderId: any;
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    // Qualquer inicialização necessária pode ser feita aqui.
  }

  addToOrder(): void {
    this.orderId = window.localStorage.getItem('id_order')
    this.itemService.addToOrder({"itemId": this.itemId, "orderId": this.orderId, "quantity": 1}).subscribe((t) => {
      console.log('-------------------------asd-----------------------------')
      console.log(t)
    }
    );
  }
}