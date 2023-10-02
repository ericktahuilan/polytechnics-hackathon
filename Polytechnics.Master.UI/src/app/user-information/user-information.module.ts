import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInformationRoutingModule } from './user-information-routing.module';
import { UserInformationPageComponent } from './pages/user-information-page/user-information-page.component';
import { UserReconciliationPageComponent } from './pages/user-reconciliation-page/user-reconciliation-page.component';
import { UserVerificationPageComponent } from './pages/user-verification-page/user-verification-page.component';
import { LayoutPageUserComponent } from './pages/layout-page-user/layout-page-user.component';


@NgModule({
  declarations: [
    UserInformationPageComponent,
    UserReconciliationPageComponent,
    UserVerificationPageComponent,
    LayoutPageUserComponent
  ],
  imports: [
    CommonModule,
    UserInformationRoutingModule
  ]
})
export class UserInformationModule { }
