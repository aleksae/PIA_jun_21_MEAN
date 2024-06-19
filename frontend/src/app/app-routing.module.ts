import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { ZamenaComponent } from './zamena/zamena.component';
import { ZahteviComponent } from './zahtevi/zahtevi.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"nastavnik", component: NastavnikComponent},
  {path:"zamena", component: ZamenaComponent},
  {path:"zahtevi", component: ZahteviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
