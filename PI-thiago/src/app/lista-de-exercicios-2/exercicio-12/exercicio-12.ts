import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio-12',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio-12.html',
  styleUrl: './exercicio-12.css'
})
export class Exercicio12 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 10
    }
  ];

  nome = '';
  quantidade = 0;
  mensagem = '';

  cadastrar() {

    if (this.nome.trim() === '') {
      this.mensagem = 'Informe o nome do produto.';
      return;
    }

    if (this.quantidade < 0) {
      this.mensagem = 'A quantidade não pode ser negativa.';
      return;
    }

    const novoProduto: Produto = {
      id: this.produtos.length + 1,
      nome: this.nome,
      quantidade: this.quantidade
    };

    this.produtos.push(novoProduto);

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = 'Produto cadastrado com sucesso.';
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

}