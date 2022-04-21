import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BikeCreateComponent } from './bikes/bikes-create/bike-create.component';
import { BikeListComponent } from './bikes/bikes-list/bike-list.component';

const routes: Routes = [
  {path:'', component: BikeListComponent},
  {path:'create', component: BikeCreateComponent},
  //{path:'edit/:bikeId', component: BikeCreateComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
