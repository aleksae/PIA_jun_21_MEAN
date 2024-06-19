import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { ZamenaComponent } from './zamena/zamena.component';
import { ZahteviComponent } from './zahtevi/zahtevi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NastavnikComponent,
    ZamenaComponent,
    ZahteviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
