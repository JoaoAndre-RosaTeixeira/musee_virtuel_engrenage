import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EngrenagesComponent } from './engrenages/engrenages.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { EngrenageInfoComponent } from './engrenage-info/engrenage-info.component';
import { EngrenageCreateComponent } from './engrenage-create/engrenage-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    EngrenagesComponent,
    ContactComponent,
    EngrenageInfoComponent,
    EngrenageCreateComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
