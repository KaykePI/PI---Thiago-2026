import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio01 } from './exercicio-01/exercicio-01';
import { Exercicio02 } from './exercicio-02/exercicio-02';
import { Exercicio03 } from './exercicio-03/exercicio-03';
import { Exercicio04 } from './exercicio-04/exercicio-04';
import { Exercicio05 } from './exercicio-05/exercicio-05';
import { Exercicio06 } from './exercicio-06/exercicio-06';
import { Exercicio07 } from './exercicio-07/exercicio-07';
import { Exercicio08 } from './exercicio-08/exercicio-08';
import { Exercicio09 } from './exercicio-09/exercicio-09';
import { Exercicio10 } from './exercicio-10/exercicio-10';
import { Exercicio11 } from './exercicio-11/exercicio-11';
import { Exercicio12 } from './exercicio-12/exercicio-12';
import { Exercicio13 } from './exercicio-13/exercicio-13';
import { Exercicio14 } from './exercicio-14/exercicio-14';

const routes: Routes = [
  { path: 'exercicio-01', component: Exercicio01 },
  { path: 'exercicio-02', component: Exercicio02 },
  { path: 'exercicio-03', component: Exercicio03 },
  { path: 'exercicio-04', component: Exercicio04 },
  { path: 'exercicio-05', component: Exercicio05 },
  { path: 'exercicio-06', component: Exercicio06 },
  { path: 'exercicio-07', component: Exercicio07 },
  { path: 'exercicio-08', component: Exercicio08 },
  { path: 'exercicio-09', component: Exercicio09 },
  { path: 'exercicio-10', component: Exercicio10 },
  { path: 'exercicio-11', component: Exercicio11 },
  { path: 'exercicio-12', component: Exercicio12 },
  { path: 'exercicio-13', component: Exercicio13 },
  { path: 'exercicio-14', component: Exercicio14 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDeExercicios2RoutingModule {}