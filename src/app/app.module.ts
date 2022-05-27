import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GrafBarrasComponent } from './components/graf-barras/graf-barras.component';
import { GrafLineasComponent } from './components/graf-lineas/graf-lineas.component';

@NgModule({
  declarations: [
    AppComponent,
    GrafBarrasComponent,
    GrafLineasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
