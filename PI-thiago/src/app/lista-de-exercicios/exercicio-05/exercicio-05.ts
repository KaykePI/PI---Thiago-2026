import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-05',
  templateUrl: './exercicio-05.html',
  styleUrl: './exercicio-05.css'
})
export class Exercicio05 {

  curtidas = 0;

  curtir(): void {
    this.curtidas++;
  }

}
