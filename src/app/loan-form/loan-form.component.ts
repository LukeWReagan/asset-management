import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, distinctUntilChanged, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from '../_service/alert.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
  loading = false;
  submitted = false;
  public loanForm: FormGroup;
  public loanData: any;
  autoFill: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService ) { }

  ngOnInit() {
    this.loanForm = this.formBuilder.group({
      ClientName: ['', []],
      Phone: ['', []],
      ProjectName: ['', []],
      Type: ['', []],
      LoanDate: ['', []],
      LoanCondition: ['', []],
      LoanSupervisor: ['', []],
      Brand: ['', []],
      ModelNumber: ['', []],
      SerialNumber: ['', []],
      AssetNumber: ['', []],
      Note: ['', []],
      FirstName: ['', []],
      LastName: ['', []],
      WorkAddress: ['', []],
      HomeAddress: ['', []],
      Email: ['', []]
    });
    this.userService.currentMessage.pipe(filter((s:string) => s!="n/a")).subscribe(message => {
      console.log('sub called, message: ' + message);
      if (message == 'n/a') return;

      console.log('made it thru');
      this.autoFill = JSON.parse(message);
      //console.log('autofill next line:');
      //console.log(this.autoFill);
      if (this.autoFill.autofill) {
        console.log('autofilling...');
        let info = this.autoFill.info;
        if (info.FirstName != null)
          this.loanForm.get('FirstName').setValue(info.FirstName);
        console.log('fn ' + info.FirstName);
        if (info.LastName != null)
          this.loanForm.get('LastName').setValue(info.LastName);
        console.log('ln ' + info.LastName);
        if (info.Phone != null)
          this.loanForm.get('Phone').setValue(info.Phone);
        console.log('ph ' + info.Phone);
        if (info.Email != null)
          this.loanForm.get('Email').setValue(info.Email);
        console.log('email ' + info.Email);
        if (info.WorkAddress != null)
          this.loanForm.get('WorkAddress').setValue(info.WorkAddress);
        console.log('workad');
        if (info.HomeAddress != null)
          this.loanForm.get('HomeAddress').setValue(info.HomeAddress);
        console.log('homead');
        console.log('done');

      //  this.userService.changeMessage('n/a');
      }
    });
  }
  get f() { return this.loanForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loanForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.createloan(this.loanForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('loan submission successful', true);
                this.router.navigate(['/']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
