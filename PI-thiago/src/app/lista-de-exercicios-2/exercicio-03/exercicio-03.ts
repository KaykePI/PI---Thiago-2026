import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-03',
  imports: [CommonModule],
  templateUrl: './exercicio-03.html',
  styleUrl: './exercicio-03.css'
})
export class Exercicio03 {

  idade = 18;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }

}