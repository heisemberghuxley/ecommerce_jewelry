import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


const routes: Routes = [
  {
    path: 'header',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
  path: '404',
  component:Error404PageComponent
  },
  {
  path:'',
  redirectTo: 'header',
  pathMatch: 'full'
  },
  {
  path: '**',
  redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
