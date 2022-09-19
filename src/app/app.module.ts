import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

//primeNg
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { CreateProductoComponent } from './componentes/create-producto/create-producto.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/login/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent } from './componentes/login/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './componentes/login/verificar-correo/verificar-correo.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaProductosComponent,
    CreateProductoComponent,
    SpinnerComponent,
    FooterComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    RecuperarPasswordComponent,
    VerificarCorreoComponent,
    HomeComponent,
    ProductosComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ToastModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
