import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'livros',
    loadChildren: () =>
      import('./livros/livros-module').then(m => m.LivrosModule)
  },

  {
    path: 'lista-de-exercicios',
    loadChildren: () =>
      import('./lista-de-exercicios/lista-de-exercicios-module')
        .then(m => m.ListaDeExerciciosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
