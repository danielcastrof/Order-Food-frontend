import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-new-pedido',
  templateUrl: './new-pedido.component.html',
  styleUrls: ['./new-pedido.component.css']
})

export class NewPedidoComponent implements OnInit {

  pedido: Pedido = {} as Pedido;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  addPedido() {
    this.pedidoService.add(this.pedido).subscribe( pedidoResponse => {
      this.pedido = pedidoResponse;
    })
  }
}