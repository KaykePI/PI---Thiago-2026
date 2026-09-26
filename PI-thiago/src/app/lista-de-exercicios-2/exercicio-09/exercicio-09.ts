import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio-09',
  imports: [CommonModule],
  templateUrl: './exercicio-09.html',
  styleUrl: './exercicio-09.css'
})
export class Exercicio09 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      quantidade: 0
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 3
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 10
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250,
      quantidade: 5
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 8
    }
  ];

  obterSituacao(quantidade: number): string {

    if (quantidade === 0) {
      return 'Sem estoque';
    }

    if (quantidade <= 5) {
      return 'Estoque baixo';
    }

    return 'Estoque disponível';
  }

}