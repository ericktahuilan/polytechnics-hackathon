import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbProccessingRoutingModule } from './db-proccessing-routing.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { DbProcessingPageComponent } from './pages/db-processing-page/db-processing-page.component';
import { LayoutPagesDBComponent } from './pages/layout-pages-db/layout-pages-db.component';
import { DbMatchFieldsPageComponent } from './pages/db-match-fields-page/db-match-fields-page.component';
import { DbLoadPageComponent } from './pages/db-load-page/db-load-page.component';



@NgModule({
  declarations: [
    DbProcessingPageComponent,
    DbMatchFieldsPageComponent,
    LayoutPagesDBComponent,
    DbLoadPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DbProccessingRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class DbProccessingModule { }

