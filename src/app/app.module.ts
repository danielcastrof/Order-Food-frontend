import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { GetUserComponent } from './components/user/get-user/get-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { NewItemComponent } from './components/item/new-item/new-item.component';
import { GetItemComponent } from './components/item/get-item/get-item.component';
import { UpdateItemComponent } from './components/item/update-item/update-item.component';
import { DeleteItemComponent } from './components/item/delete-item/delete-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewPedidoComponent } from './components/pedido/new-pedido/new-pedido.component';
import { GetPedidoComponent } from './components/pedido/get-pedido/get-pedido.component';
import { UpdatePedidoComponent } from './components/pedido/update-pedido/update-pedido.component';
import { DeletePedidoComponent } from './components/pedido/delete-pedido/delete-pedido.component';
import { AboutComponent } from './components/about/about.component';
import { Item } from './components/item/item.model';
import { UserService } from './components/user/user.service';
import { ItemService } from './components/item/item.service';
import { PedidoService } from './components/pedido/pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    NewUserComponent,
    GetUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    NewItemComponent,
    GetItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    NewPedidoComponent,
    GetPedidoComponent,
    UpdatePedidoComponent,
    DeletePedidoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    ItemService,
    PedidoService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
