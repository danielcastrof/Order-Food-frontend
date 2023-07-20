import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() "item": { nome: string; categoria: string; descricao: string; imagem: string; valorDeVenda: number; quantidadeEmEstoque: number; };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
