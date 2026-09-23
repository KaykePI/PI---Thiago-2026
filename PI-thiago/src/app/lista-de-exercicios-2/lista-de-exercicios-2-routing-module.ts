import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio01 } from './exercicio-01/exercicio-01';

const routes: Routes = [
  { path: 'exercicio-01', component: Exercicio01 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDeExercicios2RoutingModule {}