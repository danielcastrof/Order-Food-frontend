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