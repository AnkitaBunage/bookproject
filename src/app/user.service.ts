import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL="http://localhost:5000/Users"

  createUser(user:{name:String,age:number})
{
  return this.http.post(this.BASE_URL,user)
}
  constructor(private http:HttpClient) { }
}
