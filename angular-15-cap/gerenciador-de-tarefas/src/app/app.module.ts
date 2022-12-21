//import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TarefasModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}