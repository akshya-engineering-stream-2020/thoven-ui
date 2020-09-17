import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MultiSelectAllModule} from '@syncfusion/ej2-angular-dropdowns';
import {ClipboardModule} from '@angular/cdk/clipboard';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {MyCardsComponent} from './my-cards/my-cards.component';
import {FeatureComponent} from './feature/feature.component';
import {TribeComponent} from './tribe/tribe.component';
import {SupportComponent} from './support/support.component';
import {DashboardNavbarComponent} from './dashboard-navbar/dashboard-navbar.component';
import {DashboardAddButtonComponent} from './dashboard-add-button/dashboard-add-button.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {GroupSpaceComponent} from './group-space/group-space.component';
import {LoginComponent} from './login/login.component';
import {RequestGroupComponent} from './request-group/request-group.component';
import {AnalysisComponent} from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MyCardsComponent,
    FeatureComponent,
    TribeComponent,
    SupportComponent,
    DashboardNavbarComponent,
    DashboardAddButtonComponent,
    CreateGroupComponent,
    GroupSpaceComponent,
    LoginComponent,
    RequestGroupComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MultiSelectAllModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
