import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio-09',
  imports: [FormsModule],
  templateUrl: './exercicio-09.html',
  styleUrl: './exercicio-09.css'
})
export class Exercicio09 {

  produto = 'Teclado';
  estoque = 10;

  aumentar(): void {
    this.estoque++;
  }

  diminuir(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }

}

