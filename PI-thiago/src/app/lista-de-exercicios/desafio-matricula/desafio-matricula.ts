import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-matricula',
  imports: [FormsModule],
  templateUrl: './desafio-matricula.html',
  styleUrl: './desafio-matricula.css'
})
export class DesafioMatricula {

  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentar(): void {
    this.quantidadeDisciplinas++;
  }

  diminuir(): void {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(): void {
    this.mensagem =
      `Matrícula realizada para ${this.nomeAluno} em ${this.quantidadeDisciplinas} disciplina(s).`;
  }

}
