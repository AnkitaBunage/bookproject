import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//const URL = 'http://localhost:8888/digitalBooks/';
const URL = 'http://52.91.1.168:8888/digitalBooks/';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  saveBook(book: { title: string; author:string; category:string; price:string; publisher:string; releaseDate:Date; publishedDate:Date; content:string;}){
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.post(URL+'saveBook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }


  constructor(private http: HttpClient) { }
}
