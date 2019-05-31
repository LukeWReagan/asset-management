import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { LoanFormComponent } from './loan-form/loan-form.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'info', component: InfoComponent },
  { path: 'loan', component: LoanFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
