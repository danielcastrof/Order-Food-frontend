import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})

export class DeleteItemComponent implements OnInit {

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  item: Item = {} as Item;

  id = this.route.snapshot.paramMap.get('id')!

  ngOnInit(): void {
    this.itemService.getById(this.id).subscribe( item => {
      this.item = item;
    })
  }
}