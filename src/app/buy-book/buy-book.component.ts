import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyBookService } from '../buy-book.service';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {
  buyBook = {
    bookId:"",
    email:"",
    username:"",
    
  }
  router: any;
  constructor(private buyBookService:BuyBookService) { }
  buy(){
    //const observable:Observable=this.buyBookService.buy(this.buyBook);
    const observable= this.buyBookService.buy(this.buyBook);
  observable.subscribe(
    (response)=>{
      console.log(response);
      
    },
    function(error){
     alert(error.error.text);
    },
    ()=>{this.router.navigate(['signin']);
  }
  
    )
  }


  ngOnInit(): void {
  }

}
