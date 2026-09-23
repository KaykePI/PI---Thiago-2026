import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-01',
  imports: [CommonModule],
  templateUrl: './exercicio-01.html',
  styleUrl: './exercicio-01.css'
})
export class Exercicio01 {

  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }

}