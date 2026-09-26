import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-06',
  imports: [CommonModule],
  templateUrl: './exercicio-06.html',
  styleUrl: './exercicio-06.css'
})
export class Exercicio06 {

  nomesIniciais = [
    'Ana',
    'Bruno',
    'Carlos',
    'Daniela',
    'Eduardo'
  ];

  nomes = [...this.nomesIniciais];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.nomesIniciais];
  }

}