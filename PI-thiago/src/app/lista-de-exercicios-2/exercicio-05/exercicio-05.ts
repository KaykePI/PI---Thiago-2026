import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-05',
  imports: [CommonModule],
  templateUrl: './exercicio-05.html',
  styleUrl: './exercicio-05.css'
})
export class Exercicio05 {

  nomes = [
    'Ana',
    'Bruno',
    'Carlos',
    'Daniela',
    'Eduardo'
  ];

}