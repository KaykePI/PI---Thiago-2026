import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-04',
  imports: [CommonModule],
  templateUrl: './exercicio-04.html',
  styleUrl: './exercicio-04.css'
})
export class Exercicio04 {

  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionarProduto() {
    this.quantidadeEstoque++;
  }

  removerProduto() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }

}