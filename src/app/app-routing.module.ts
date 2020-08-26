import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import {CicloEscolarComponent} from './components/ciclo-escolar/ciclo-escolar.component'
=======
import { MateriasComponent } from './components/materias/materias.component'
>>>>>>> 4d2163c017de24ecb7898e0e54ae2db2890d3b52

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
<<<<<<< HEAD

  {
    path: 'ciclos',
    component: CicloEscolarComponent
=======
  {
    path: 'materias',
    component: MateriasComponent
>>>>>>> 4d2163c017de24ecb7898e0e54ae2db2890d3b52
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
