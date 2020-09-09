import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { FeatureComponent } from './feature/feature.component';
import { TribeComponent } from './tribe/tribe.component';
import { SupportComponent } from './support/support.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MyCardsComponent,
    FeatureComponent,
    TribeComponent,
    SupportComponent,
    DashboardNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
