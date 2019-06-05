import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_service/user.service';
import { AlertService } from '../_service/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-loan-resolve',
  templateUrl: './loan-resolve.component.html',
  styleUrls: ['./loan-resolve.component.css']
})
export class LoanResolveComponent implements OnInit {

  public loanForm: FormGroup;
  loading:any;

  @Input() loanid:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.loanForm = this.formBuilder.group({
      LoanID: ['', []],
      ReturnDate: ['', []],
      ReturnSupervisor: ['', []],
      ReturnCondition: ['', []]
    });
    console.log('loanid: ' + this.loanid);
    this.loanForm.get('LoanID').setValue(this.loanid);
  }

  cancelLoanResolve() {
    this.userService.setLoanId(-1);
  }

  onSubmit() {
    console.log('submitting!');
    // stop here if form is invalid
    if (this.loanForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.resolveloan(this.loanForm.value)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success('Loan Resolve Successful', true);
            this.router.navigate(['/loan-info']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
}
