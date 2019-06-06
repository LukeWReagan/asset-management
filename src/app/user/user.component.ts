import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../_service/user.service';
import { User } from '../_models/user';
import { AlertService } from '../_service/alert.service';

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
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    this.userSearchForm = this.formBuilder.group({
      user: [""]
    });
    localStorage.clear();
    this.userService.lastSeenPage = '';
  }
  findUser(formValues) {
    if (formValues.user == "") {
      this.alertService.error('Search cannot be empty');
      return;
    }
    this.userService
      .getUser(formValues.user)
      .subscribe(data => {
        this.userData = data;
      });
  }
  dataToService(name, id) {
   this.userService.setName(name);
   this.userService.setId(id);
  }
  textChangeEvt(val) {
    //console.log('evt fired, val:' + val.user);
    let text = val.user;
    if (text.length < 2) return;

    this.findUser(val);
  }
}
