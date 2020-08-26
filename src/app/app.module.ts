import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
<<<<<<< Updated upstream
import { LoginComponent } from './components/login/login.component';
=======
import { SeccionesComponent } from './components/secciones/secciones.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
<<<<<<< Updated upstream
    LoginComponent
=======
    SeccionesComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
