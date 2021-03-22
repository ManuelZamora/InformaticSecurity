import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './Componentes/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
  ]
})
export class AppRoutingModule { }
