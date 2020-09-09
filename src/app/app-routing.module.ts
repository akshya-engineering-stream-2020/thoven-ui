import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {MyCardsComponent} from './my-cards/my-cards.component';
import {FeatureComponent} from './feature/feature.component';
import {TribeComponent} from './tribe/tribe.component';
import {SupportComponent} from './support/support.component';

const routes: Routes = [
  {path: 'home', component: MainNavbarComponent, children: [
      {path: 'myCards', component: MyCardsComponent},
      {path: 'feature', component: FeatureComponent},
      {path: 'tribe', component: TribeComponent},
      {path: 'support', component: SupportComponent},
    ]},
  {path: '', redirectTo: '/home/myCards', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
