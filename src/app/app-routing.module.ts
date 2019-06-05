import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanInfoComponent } from './loan-info/loan-info.component';
import { LoanResolveComponent } from './loan-resolve/loan-resolve.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'info', component: InfoComponent },
  { path: 'loan', component: LoanFormComponent },
  { path: 'loan-info', component: LoanInfoComponent },
  { path: 'loan-resolve', component: LoanResolveComponent, runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
