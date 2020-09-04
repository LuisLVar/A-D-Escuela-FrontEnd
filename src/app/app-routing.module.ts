import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CicloEscolarComponent} from './components/ciclo-escolar/ciclo-escolar.component'
import { MateriasComponent } from './components/materias/materias.component'
import { InscripcionComponent } from './components/alumnos/inscripcion/inscripcion.component'
import { PortadaComponent } from './components/portada/portada.component'
import { AsigMateriaComponent } from './components/asig-materia/asig-materia.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    component: PortadaComponent
  },
  {
    path: 'ciclos',
    component: CicloEscolarComponent
  },
  {
    path: 'materias',
    component: MateriasComponent
  },
  {
    path: 'inscripción',
    component: InscripcionComponent
  },
  {
    path: 'asigmateria',
    component: AsigMateriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
