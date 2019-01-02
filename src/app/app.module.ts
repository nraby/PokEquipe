import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KantoPokedexComponent } from './kanto-pokedex/kanto-pokedex.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    KantoPokedexComponent,
    RegisterComponent,
    LoginComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
