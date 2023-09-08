import { Injectable } from "@angular/core";

export interface Item {
    id?: string;
    // name: string;
    // categoria: string;
    // descricao: string;
    // imagem: string;
    // valorDeVenda: number;
    // valorSubtotal: number;
    // quantidade: number;
    // quantidadeEmEstoque: number;

    
    //readonly id?: string;
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    url: string;
    //order?: Order[];
}