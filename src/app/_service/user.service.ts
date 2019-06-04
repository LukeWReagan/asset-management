import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanSubmit } from '../_models/LoanSubmit'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  storedName: any;
  storedPhone: any;
  storedId: any;

  constructor(private http: HttpClient) { }
  
  getUser(user){
    return this.http.get(
      'http://assetmanagementservice.cloudapp.net/AssetServ.svc/emp/employees/' + user)
  }
  
  getInfo(userID) {
	  return this.http.get('http://assetmanagementservice.cloudapp.net/AssetServ.svc/emp/employee/' + userID)
  }
  setName(name) {
    this.storedName = name;
    localStorage.setItem('storedName', name);
    return this.storedName;
  }
  setPhone(ph) {
    this.storedPhone = ph;
    localStorage.setItem('storedPhone', ph);
    return this.storedPhone;
  }
  setId(id) {
    this.storedId = id;
    localStorage.setItem('storedId', id);
    return this.storedId;
  }
  createloan(loan: LoanSubmit){
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/submit', '{"form":' + JSON.stringify(loan) + '}', options);
  }
}
