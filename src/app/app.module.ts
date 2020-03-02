import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './Compoments/contador/contador.component';
import { EchoComponent } from './components/echo/echo.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EchoComponent,
    ListaComponent,
    ListaDeTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
