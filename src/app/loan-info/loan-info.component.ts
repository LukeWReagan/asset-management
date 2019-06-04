import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})
export class LoanInfoComponent implements OnInit {
  empId:any;
  loans:any;
  users: User[] = [];
  public userData: any;
  
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  this.empId = this.userService.storedId;
  this.userService.getLoans(this.empId).subscribe(info => {
    this.loans = info;
    if (this.loans[0].LoanID == -1) {
      this.loans = [];
    }
    console.log(info);
  });
  }
}
