import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { FraudComponent } from './pages/fraud/fraud.component';
import { CashComponent } from './pages/cash/cash.component';
import { TimeComponent } from './pages/time/time.component';
import { IntegrationComponent } from './pages/integration/integration.component';
import { CreditComponent } from './pages/credit/credit.component';
import { InternalComponent } from './pages/network/internal/internal.component';
import { GroupsComponent } from './pages/network/groups/groups.component';
import { CaleroComponent } from './pages/network/calero/calero.component';
import { DocumentationComponent } from './pages/document/documentation/documentation.component';

const appRoutes: Routes = [
  { path: 'payments', component: PaymentsComponent},
  { path: 'fraud', component: FraudComponent},
  { path: 'cash', component: CashComponent},
  { path: 'time', component: TimeComponent},
  { path: 'integration', component: IntegrationComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'internal', component: InternalComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'calero', component: CaleroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    FraudComponent,
    CashComponent,
    TimeComponent,
    IntegrationComponent,
    CreditComponent,
    InternalComponent,
    GroupsComponent,
    CaleroComponent,
    DocumentationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // new modules added here
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
	  MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
