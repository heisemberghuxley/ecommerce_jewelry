import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ShoppingCarComponent } from './shoppingCar/shoppingCar.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';



@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ModalLoginComponent,
    ShoppingCarComponent,
    LayoutPageComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsRoutingModule
  ],
  exports:[
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ModalLoginComponent,
    LayoutPageComponent
  ]
})
export class ComponentsModule { }
