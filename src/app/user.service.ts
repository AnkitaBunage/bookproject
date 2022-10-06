import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  signup(user:{username:string;password:string;email:string;}) {
    return this.http.post(this.BASE_URL+'signup',user);
  }
  //BASE_URL="http://localhost:8888/api/v1/auth/"
  BASE_URL="http://52.91.1.168:8888/api/v1/auth/"
  signin(user:{username:string;password:string;}) {
    return this.http.post(this.BASE_URL+'signin',user);
  }
  createUser(user:{name:String,age:number})
{
  return this.http.post(this.BASE_URL,user)
}
  constructor(private http:HttpClient) { }
}
