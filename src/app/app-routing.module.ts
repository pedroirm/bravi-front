import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactDetailComponent} from "./contact-detail/contact-detail.component";
import {ContactCreateComponent} from "./contact-create/contact-create.component";

const routes: Routes = [
  {path: 'home', redirectTo: 'home'},
  {path: 'login', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: HomeComponent},
  {path: 'contato/:id', component: ContactDetailComponent},
  {path: 'create', component: ContactCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
