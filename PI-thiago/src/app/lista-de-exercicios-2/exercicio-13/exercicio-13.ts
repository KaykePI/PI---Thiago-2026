import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio-13',
  imports: [CommonModule],
  templateUrl: './exercicio-13.html',
  styleUrl: './exercicio-13.css'
})
export class Exercicio13 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar banco de dados',
      responsavel: 'Ana',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Criar tela inicial',
      responsavel: 'Bruno',
      prioridade: 'média',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Testar sistema',
      responsavel: 'Carlos',
      prioridade: 'baixa',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Corrigir cadastro',
      responsavel: 'Daniela',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Atualizar documentação',
      responsavel: 'Eduardo',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Publicar projeto',
      responsavel: 'Fernanda',
      prioridade: 'alta',
      concluida: false
    }
  ];

  alternarStatus(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  contarConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  contarPendentes() {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }

}