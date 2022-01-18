import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Partie1Component } from './partie1/partie1.component';
import { Partie2Component } from './partie2/partie2.component';

const routes: Routes = [
  {path: '', redirectTo: '/p1', pathMatch: 'full'},
  {path: 'p1', component: Partie1Component},
  {path: 'p2', component: Partie2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
