import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD


=======
>>>>>>> 27c2274367c065398cd58f7fe739f4345c99062e
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { MateriasComponent } from './components/materias/materias.component';
<<<<<<< HEAD


import {CicloEscolarService} from './services/ciclo_escolar/ciclo-escolar.service';
import { CicloEscolarComponent } from './components/ciclo-escolar/ciclo-escolar.component';
import { InscripcionComponent } from './components/alumnos/inscripcion/inscripcion.component';

=======
import {CicloEscolarService} from './services/ciclo_escolar/ciclo-escolar.service';
import { CicloEscolarComponent } from './components/ciclo-escolar/ciclo-escolar.component';
import { LoginComponent } from './components/login/login.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
>>>>>>> 27c2274367c065398cd58f7fe739f4345c99062e

@NgModule({
  declarations: [
    AppComponent,
    CicloEscolarComponent,
<<<<<<< HEAD
    InscripcionComponent,
    NavbarComponent,
    PortadaComponent,
    MateriasComponent
=======
    NavbarComponent,
    MateriasComponent,
    PortadaComponent,
    LoginComponent,
    SeccionesComponent
>>>>>>> 27c2274367c065398cd58f7fe739f4345c99062e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
  ],
  providers: [
    CicloEscolarService
=======
    FormsModule,
    HttpClientModule,
>>>>>>> 27c2274367c065398cd58f7fe739f4345c99062e
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
