import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio-10',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './exercicio-10.html',
  styleUrl: './exercicio-10.css'
})
export class Exercicio10 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      quantidade: 5,
      promocao: true
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10,
      promocao: false
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3,
      promocao: true
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250,
      quantidade: 7,
      promocao: false
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 2,
      promocao: false
    }
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }

}