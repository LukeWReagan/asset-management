import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './_service/user.service';
import {  AlertService } from './_service/alert.service';
import { InfoComponent } from './info/info.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { AlertComponent } from './_directive/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InfoComponent,
    LoanFormComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
