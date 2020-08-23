import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {CicloEscolarService} from './services/ciclo_escolar/ciclo-escolar.service';
import { CicloEscolarComponent } from './components/ciclo-escolar/ciclo-escolar.component';


@NgModule({
  declarations: [
    AppComponent,
    CicloEscolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CicloEscolarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
