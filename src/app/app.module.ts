import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {MyCardsComponent} from './my-cards/my-cards.component';
import {FeatureComponent} from './feature/feature.component';
import {TribeComponent} from './tribe/tribe.component';
import {SupportComponent} from './support/support.component';
import {DashboardNavbarComponent} from './dashboard-navbar/dashboard-navbar.component';
import {DashboardAddButtonComponent} from './dashboard-add-button/dashboard-add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MyCardsComponent,
    FeatureComponent,
    TribeComponent,
    SupportComponent,
    DashboardNavbarComponent,
    DashboardAddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
