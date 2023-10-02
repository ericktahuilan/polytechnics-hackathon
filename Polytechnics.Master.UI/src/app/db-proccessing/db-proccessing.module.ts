import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbProccessingRoutingModule } from './db-proccessing-routing.module';
import { DbProcessingPageComponent } from './pages/db-processing-page/db-processing-page.component';
import { LayoutPagesDBComponent } from './pages/layout-pages-db/layout-pages-db.component';
import { DbMatchFieldsPageComponent } from './pages/db-match-fields-page/db-match-fields-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DbProcessingPageComponent,
    DbMatchFieldsPageComponent,
    LayoutPagesDBComponent,
  ],
  imports: [
   
    DbProccessingRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class DbProccessingModule { }
