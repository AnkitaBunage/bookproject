import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  book = {
    title:"",
    author:"",
    category:"",
    price:"",
    publisher:"",
    releaseDate:new Date(),
    publishedDate:new Date(),
    content:""

  }
  constructor(private bookService:BookService) { }

  save(){
    console.log('saved');
   const observable= this.bookService.saveBook(this.book);
   observable.subscribe(response=>{
     //console.log(response);
     alert(response);
  }
  ,
    function(error){
      alert(error.error.text);
    }
  )
}

  ngOnInit(): void {
  }

}
