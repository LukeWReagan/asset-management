import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatToolbarModule, MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatTooltipModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatNativeDateModule } from '@angular/material';
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
import { LoanInfoComponent } from './loan-info/loan-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InfoComponent,
    LoanFormComponent,
    AlertComponent,
    LoanInfoComponent
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
