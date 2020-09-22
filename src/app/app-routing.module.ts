import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloEscolarComponent } from './components/ciclo-escolar/ciclo-escolar.component'
import { MateriasComponent } from './components/materias/materias.component'
import { InscripcionComponent } from './components/alumnos/inscripcion/inscripcion.component'
import { PortadaComponent } from './components/portada/portada.component'
import { GradoComponent } from './components/grados/grado/grado.component';
import { AsigMateriaComponent } from './components/asig-materia/asig-materia.component'
import { SeccionesComponent } from './components/secciones/secciones.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AspectosComponent } from './components/aspectos/aspectos.component';

const routes: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full' },
  { path: 'portada', component: PortadaComponent },
  { path: 'ciclos', component: CicloEscolarComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'grados', component: GradoComponent },
  { path: 'asigmateria', component: AsigMateriaComponent },
  { path: 'secciones', component: SeccionesComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'aspectos', component: AspectosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
