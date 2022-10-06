import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:8888/digitalBooks/';
//const URL = 'http://52.91.1.168:8888/digitalBooks/';
@Injectable({
  providedIn: 'root'
})

export class SearchBooksCategoryService {
  

  searchBooksCategory(searchBook: { author:string; category:string; price:string; publisher:string;}){
    let params = new HttpParams();

   params = params.append("category",searchBook.category),

   params = params.append("author",searchBook.author),

   params = params.append("publisher",searchBook.publisher),

   params = params.append("price",searchBook.price)

  return this.http.get(URL+'searchBooks',{params});
  
   // return this.http.post(URL+'searchAllBooks',searchBook);
  }
  

  constructor(private http: HttpClient) { }
}
