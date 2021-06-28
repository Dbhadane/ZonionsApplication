import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { HelperComponent } from './helper/helper.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdaterestComponent } from './updaterest/updaterest.component';
import { ViewerestComponent } from './viewerest/viewerest.component';


const routes: Routes = [
  {  path:'home', component: HomeComponent},
  {  path:'login', component: LoginComponent },
  {  path:'Aboutus', component: AboutusComponent },
  {  path:'helper/:id',component:HelperComponent},
  {  path: 'add', component:AddrestaurantComponent },
  {  path:'view', component:ViewerestComponent},
  {  path:'update/:id', component:UpdaterestComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
