import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio-14',
  imports: [],
  templateUrl: './exercicio-14.html',
  styleUrl: './exercicio-14.css'
})
export class Exercicio14 {

  mensagemVisivel = true;

  nomes = [
    'Ana',
    'Bruno',
    'Carlos',
    'Daniela',
    'Eduardo'
  ];

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
    }
  ];

}