import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {EngrenagesComponent} from "./engrenages/engrenages.component";
import {ContactComponent} from "./contact/contact.component";
import {EngrenageInfoComponent} from "./engrenage-info/engrenage-info.component";
import {EngrenageCreateComponent} from "./engrenage-create/engrenage-create.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'engrenages', component: EngrenagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'engrenageInfo/:slug', component: EngrenageInfoComponent },
  { path: 'engrenageCreate', component: EngrenageCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
