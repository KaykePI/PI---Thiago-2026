import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio-08',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './exercicio-08.html',
  styleUrl: './exercicio-08.css'
})
export class Exercicio08 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250,
      quantidade: 7
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 2
    }
  ];

}