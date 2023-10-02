import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
{
  path:'auth',
  loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule) 
},
{
  path: 'db',
  loadChildren: ()=> import('./db-proccessing/db-proccessing.module').then(m=> m.DbProccessingModule) 
},
{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full',
},
{
  path:'**',
  redirectTo: 'auth'
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
