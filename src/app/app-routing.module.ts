import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteItemComponent } from './components/item/delete-item/delete-item.component';
import { GetItemComponent } from './components/item/get-item/get-item.component';
import { NewItemComponent } from './components/item/new-item/new-item.component';
import { UpdateItemComponent } from './components/item/update-item/update-item.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { DeletePedidoComponent } from './components/pedido/delete-pedido/delete-pedido.component';
import { GetPedidoComponent } from './components/pedido/get-pedido/get-pedido.component';
import { NewPedidoComponent } from './components/pedido/new-pedido/new-pedido.component';
import { UpdatePedidoComponent } from './components/pedido/update-pedido/update-pedido.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'item/new', component: NewItemComponent },
  { path: 'item/get', component: GetItemComponent },
  { path: 'item/update/:id', component: UpdateItemComponent },
  { path: 'item/delete/:id', component: DeleteItemComponent },
  { path: 'pedido/new', component: NewPedidoComponent },
  { path: 'pedido/get', component: GetPedidoComponent },
  { path: 'pedido/update/:id', component: UpdatePedidoComponent },
  { path: 'pedido/delete/:id', component: DeletePedidoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chat', component: ChatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
