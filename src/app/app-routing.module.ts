import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { EuComponent } from './views/eu/eu.component';
import { ProjetosComponent } from './views/projetos/projetos.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"contato",
    component: ContatoComponent
  },
  {
    path:"sobremim",
    component: EuComponent
  },
  {
    path:"projetos",
    component: ProjetosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
