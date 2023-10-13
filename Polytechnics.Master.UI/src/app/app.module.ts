import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { DbProccessingModule } from './db-proccessing/db-proccessing.module';


import { AppComponent } from './app.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      AuthModule,
      DbProccessingModule,
      MatSortModule,
      MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
