import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../_service/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  public userSearchForm: FormGroup;
  public userData: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userSearchForm = this.formBuilder.group({
      user: [""]
    });
  }
  findUser(formValues) {
    this.userService
      .getUser(formValues.user)
      .subscribe(data => {
        this.userData = data;
      });
  }
  dataToService(name, phone) {
   this.userService.setId(name);
   this.userService.setPhone(phone);
  }
}
