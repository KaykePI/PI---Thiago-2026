import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-11',
  imports: [CurrencyPipe],
  templateUrl: './exercicio-11.html',
  styleUrl: './exercicio-11.css'
})
export class Exercicio11 {

  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagem =
      `${this.quantidade} unidade(s) de ${this.produto} adicionada(s) ao carrinho.`;
  }

}
