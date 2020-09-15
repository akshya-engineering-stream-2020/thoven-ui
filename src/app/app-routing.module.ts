import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {MyCardsComponent} from './my-cards/my-cards.component';
import {FeatureComponent} from './feature/feature.component';
import {TribeComponent} from './tribe/tribe.component';
import {SupportComponent} from './support/support.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {GroupSpaceComponent} from './group-space/group-space.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'home', component: MainNavbarComponent, children: [
      {path: 'myCards', component: MyCardsComponent},
      {path: 'feature', component: FeatureComponent},
      {path: 'tribe', component: TribeComponent},
      {path: 'support', component: SupportComponent},
      {path: 'create-group', component: CreateGroupComponent},
      {path: 'group-space', component: GroupSpaceComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
