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
import { InscripcionAlumnoComponent } from './components/inscripcion-alumno/inscripcion-alumno.component';
import { ColoresComponent } from './components/colores/colores.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import {RegistroCalificacionComponent} from './components/registro-calificacion/registro-calificacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full' },
  { path: 'portada', component: PortadaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ciclos', component: CicloEscolarComponent, canActivate: [AuthGuard] },
  { path: 'materias', component: MateriasComponent, canActivate: [AuthGuard]  },
  { path: 'inscripcion', component: InscripcionComponent, canActivate: [AuthGuard]  },
  { path: 'grados', component: GradoComponent, canActivate: [AuthGuard]  },
  { path: 'asigmateria', component: AsigMateriaComponent, canActivate: [AuthGuard]  },
  { path: 'secciones', component: SeccionesComponent, canActivate: [AuthGuard]  },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard]  },
  { path: 'aspectos', component: AspectosComponent, canActivate: [AuthGuard]  },
  { path: 'inscripcion_alumno', component: InscripcionAlumnoComponent, canActivate: [AuthGuard]  },
  { path: 'colores', component: ColoresComponent, canActivate: [AuthGuard]  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
