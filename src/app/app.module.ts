import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD

=======
>>>>>>> 4d2163c017de24ecb7898e0e54ae2db2890d3b52

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
=======
import { MateriasComponent } from './components/materias/materias.component';
>>>>>>> feature/crud_materias


import {CicloEscolarService} from './services/ciclo_escolar/ciclo-escolar.service';
import { CicloEscolarComponent } from './components/ciclo-escolar/ciclo-escolar.component';
import { InscripcionComponent } from './components/alumnos/inscripcion/inscripcion.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CicloEscolarComponent,
InscripcionComponent
=======
<<<<<<< HEAD
    NavbarComponent,
    PortadaComponent
=======
    MateriasComponent
>>>>>>> feature/crud_materias
>>>>>>> 4d2163c017de24ecb7898e0e54ae2db2890d3b52
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
<<<<<<< HEAD
  ],
  providers: [
    CicloEscolarService
=======
>>>>>>> 4d2163c017de24ecb7898e0e54ae2db2890d3b52
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
