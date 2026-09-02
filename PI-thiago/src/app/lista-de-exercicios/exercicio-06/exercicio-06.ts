import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-06',
  templateUrl: './exercicio-06.html',
  styleUrl: './exercicio-06.css'
})
export class Exercicio06 {

  quantidade = 0;

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }

}
