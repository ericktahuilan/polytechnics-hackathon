import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent,
    RegisterPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AuthModule { }
