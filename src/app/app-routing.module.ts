import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';

const routes: Routes = [
  {path: 'home', component: MainNavbarComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
