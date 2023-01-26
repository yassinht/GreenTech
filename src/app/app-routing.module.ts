import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { OffreService } from './shared/services/offre.service';
import { OffresComponent } from './offres/offres.component';
import { ClientsComponent } from './clients/clients.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'', component: LayoutsComponent,
  children:[
    {path: 'home', component: HomeComponent},
    {path: 'freelancers', component: FreelancersComponent},
    {path: 'offres', component: OffresComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'messages', component: MessageComponent},
  ]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
