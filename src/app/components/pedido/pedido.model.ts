import { Item } from "../item/item.model";

export interface Pedido {
    id?: number;
    itens: Item[];
    valorTotal: number;
    mesa: number;
    isEntregue: boolean;
    isPago: boolean;
}