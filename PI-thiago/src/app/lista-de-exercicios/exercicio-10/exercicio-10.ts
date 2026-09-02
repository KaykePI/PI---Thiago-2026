import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio-10',
  imports: [FormsModule],
  templateUrl: './exercicio-10.html',
  styleUrl: './exercicio-10.css'
})
export class Exercicio10 {

  usuario = '';
  senha = '';
  mensagem = '';

  entrar(): void {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }

}
