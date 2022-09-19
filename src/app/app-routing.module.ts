import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { CreateProductoComponent } from './componentes/create-producto/create-producto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { RecuperarPasswordComponent } from './componentes/login/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './componentes/login/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componentes/login/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'productos', component:ListaProductosComponent},
  {path: 'crear-producto', component:CreateProductoComponent},
  {path: 'editar-producto/:id', component:CreateProductoComponent},
  {path: 'home', component:HomeComponent},
  //login
  {path: 'login', component:LoginComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'recuperar-password', component:RecuperarPasswordComponent},
  {path: 'verificar-correo', component:VerificarCorreoComponent},
  {path:'contacto',component:ContactosComponent},
  {path: '*', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
