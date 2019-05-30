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
      'https://api.apixu.com/v1/current.json?key=030633e3372c470aad2184029192305&q=' + user)
  }
}
