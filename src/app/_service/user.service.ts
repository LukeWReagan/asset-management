import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanSubmit } from '../_models/LoanSubmit'
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  storedName: any;
  storedPhone: any;
  storedId: any;
  
  private messageSource = new BehaviorSubject('n/a');
  currentMessage = this.messageSource.asObservable();

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
    //console.log('here is what we get:');
    //console.log(JSON.stringify(loan));
    //let myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //myHeaders = myHeaders.set('Content-Type', 'application/json');
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // let headers = new HttpHeaders({'Content-Type': 'application/text'});

    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    //console.log('options next line');
    //console.log(options);
    return this.http.post('http://assetmanagementservice.cloudapp.net/AssetServ.svc/lns/loan/submit', '{"form":' + JSON.stringify(loan) + '}', options);
  }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
