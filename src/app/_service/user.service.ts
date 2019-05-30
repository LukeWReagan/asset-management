import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUser(user){
    return this.http.get(
      'http://localhost:51036/AssetServ.svc/emp/employees/' + user)
  }
}
