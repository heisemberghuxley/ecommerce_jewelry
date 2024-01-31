import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCarComponent } from './shoppingCar/shoppingCar.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'header', component: HeaderComponent },
      { path: 'search', component: SearchComponent },
      { path: 'login', component: ModalLoginComponent },
      { path: 'shopping', component: ShoppingCarComponent },
      { path: 'footer', component: FooterComponent },
      { path: '**', redirectTo: 'header' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
