import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { HttpClientModule } from '@angular/common/http';
//import {NgxPaginationModule} from 'ngx-pagination'
import { NgxMatDatetimePickerModule,NgxMatNativeDateModule,NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { ViewerestComponent } from './viewerest/viewerest.component';
import { UpdaterestComponent } from './updaterest/updaterest.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    AboutusComponent,
    HomeComponent,
    AddrestaurantComponent,
    ViewerestComponent,
    UpdaterestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
   // NgxPaginationModule,
    Ng2SearchPipeModule,

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
