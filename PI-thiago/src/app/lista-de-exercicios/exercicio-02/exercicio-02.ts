import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-02',
  imports: [CurrencyPipe],
  templateUrl: './exercicio-02.html',
  styleUrl: './exercicio-02.css'
})
export class Exercicio02 {

  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

}

