import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio-11',
  imports: [CommonModule],
  templateUrl: './exercicio-11.html',
  styleUrl: './exercicio-11.css'
})
export class Exercicio11 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 0
    },
    {
      id: 3,
      nome: 'Monitor',
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      quantidade: 0
    },
    {
      id: 5,
      nome: 'Webcam',
      quantidade: 8
    }
  ];

  somenteDisponiveis = false;

}