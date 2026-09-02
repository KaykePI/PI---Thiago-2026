import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-08',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './exercicio-08.html',
  styleUrl: './exercicio-08.css'
})
export class Exercicio08 {

  produto = 'Mouse Gamer';
  preco = 150;
  quantidade = 2;

}

