import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CicloEscolarComponent} from './components/ciclo-escolar/ciclo-escolar.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: 'ciclos',
    component: CicloEscolarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
