import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})

export class NewItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  item: Item = {} as Item;

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemService.add(this.item).subscribe( itemsResponse => {
      this.item = itemsResponse;
      alert("Item cadastrado com sucesso!");
    },
      error => console.log(error)
    );
  }
}