import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CicloEscolarComponent} from './components/ciclo-escolar/ciclo-escolar.component'
import { MateriasComponent } from './components/materias/materias.component'
import { InscripcionComponent } from './components/alumnos/inscripcion/inscripcion.component'
import { PortadaComponent } from './components/portada/portada.component'
<<<<<<< HEAD
import { GradoComponent } from './components/grados/grado/grado.component';
=======
import { AsigMateriaComponent } from './components/asig-materia/asig-materia.component'
>>>>>>> feature/asig_materias

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
<<<<<<< HEAD
    path: 'grados',
    component: GradoComponent
=======
    path: 'asigmateria',
    component: AsigMateriaComponent
>>>>>>> feature/asig_materias
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
