import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-02',
  imports: [CommonModule],
  templateUrl: './exercicio-02.html',
  styleUrl: './exercicio-02.css'
})
export class Exercicio02 {

  usuarioLogado = false;

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

}