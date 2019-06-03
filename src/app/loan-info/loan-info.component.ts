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
  employee:any;
  users: User[] = [];
  public userData: any;
  
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  this.empId = this.userService.storedName;
  this.userService.getInfo(this.empId).subscribe(info => {
    this.employee = info;
    console.log(info);
  });
  }
}
