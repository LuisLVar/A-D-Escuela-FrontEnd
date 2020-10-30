import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { MateriasComponent } from './components/materias/materias.component';

import { CicloEscolarComponent } from './components/ciclo-escolar/ciclo-escolar.component';
import { InscripcionComponent } from './components/alumnos/inscripcion/inscripcion.component';

import {CicloEscolarService} from './services/ciclo_escolar/ciclo-escolar.service';
import { LoginComponent } from './components/login/login.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { GradoComponent } from './components/grados/grado/grado.component';
import { AsigMateriaComponent } from './components/asig-materia/asig-materia.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AspectosComponent } from './components/aspectos/aspectos.component';
import { InscripcionAlumnoComponent } from './components/inscripcion-alumno/inscripcion-alumno.component';
import { ColoresComponent } from './components/colores/colores.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { RegistroCalificacionComponent } from './components/registro-calificacion/registro-calificacion.component';
import { RegistroConductaComponent } from './components/registro-conducta/registro-conducta.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloEscolarComponent,
    InscripcionComponent,
    NavbarComponent,
    PortadaComponent,
    MateriasComponent,
    NavbarComponent,
    MateriasComponent,
    PortadaComponent,
    LoginComponent,
    SeccionesComponent,
    GradoComponent,
    AsigMateriaComponent,
    PersonalComponent,
    AspectosComponent,
    InscripcionAlumnoComponent,
    ColoresComponent,
    RegistroCalificacionComponent,
    RegistroConductaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [
    CicloEscolarService,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
