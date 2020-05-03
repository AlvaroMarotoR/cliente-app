import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service'
import { RouterModule, Routes} from '@angular/router'

import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form/form.component'
import {FormsModule} from '@angular/forms'




const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch:'full'}, //Path vacio que redirige a clientes
  {path: 'directivas', component: DirectivaComponent}, //Mapeamos una dirección a un componente
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent} //Mapeamos el formulario con su ruta.
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) //Le pasamos la variable del array de direcciones
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
