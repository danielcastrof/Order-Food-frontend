import { Component, inject, Inject, Injectable, Input } from '@angular/core';
import { Pedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-get-pedido',
  templateUrl: './get-pedido.component.html',
  styleUrls: ['./get-pedido.component.css']
})

export class GetPedidoComponent {

  public "listPedidos": Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }
  
  ngOnInit(): void {
    this.pedidoService.get().subscribe( pedidoResponse => {
      this.listPedidos = pedidoResponse;
      console.log(pedidoResponse);
    },
      error => console.log(error)
    );
  }
}