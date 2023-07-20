import { Injectable } from "@angular/core";

export interface Item {
    id?: string;
    nome: string;
    categoria: string;
    descricao: string;
    imagem: string;
    valorDeVenda: number;
    valorSubtotal: number;
    quantidade: number;
    quantidadeEmEstoque: number;
}