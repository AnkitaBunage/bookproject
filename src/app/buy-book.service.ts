import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//const URL = 'http://localhost:8888/digitalBooks/';
const URL = 'http://52.91.1.168:8888/digitalBooks/';
@Injectable({
  providedIn: 'root'
})
export class BuyBookService {
  
  
  buy(buyBook: { bookId: string; email:string; username:string; }){
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.post(URL+'buyBooks', buyBook, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  constructor(private http: HttpClient) { }
}
