import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-07',
  imports: [CommonModule],
  templateUrl: './exercicio-07.html',
  styleUrl: './exercicio-07.css'
})
export class Exercicio07 {

  disciplinas = [
    'Programação',
    'Banco de Dados',
    'Engenharia de Software',
    'Desenvolvimento Web',
    'Sistemas Operacionais',
    'Matemática'
  ];

}