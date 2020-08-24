import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasComponent } from './components/materias/materias.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'materias',
    component: MateriasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
