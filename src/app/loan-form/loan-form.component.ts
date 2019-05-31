import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit() {
    this.loanForm = this.formBuilder.group({
      Phone: ['', [Validators.required, Validators.minLength(10)]]
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
