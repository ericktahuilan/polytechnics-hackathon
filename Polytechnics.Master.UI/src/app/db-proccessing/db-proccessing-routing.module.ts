import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbLoadPageComponent } from './pages/db-load-page/db-load-page.component';
import { DbMatchFieldsPageComponent } from './pages/db-match-fields-page/db-match-fields-page.component';
import { DbProcessingPageComponent } from './pages/db-processing-page/db-processing-page.component';
import { LayoutPagesDBComponent } from './pages/layout-pages-db/layout-pages-db.component';

const routes: Routes = [
  {
  
    path: '',
    component: LayoutPagesDBComponent,
    children:[
    { path: 'processing',component: DbProcessingPageComponent  },
    { path: 'load', component: DbLoadPageComponent },
    { path: 'match', component: DbMatchFieldsPageComponent },
    { path: '**', redirectTo:'load' }
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbProccessingRoutingModule { }
