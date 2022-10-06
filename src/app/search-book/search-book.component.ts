import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { SearchBooksCategoryService } from '../search-books-category.service';
import { Book } from '../book.model';
@Component({
  selector: 'search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  searchBook = {
    author: "",
    category: "",
    price: "",
    publisher: "",
  }
  constructor(private SearchBooksCategoryService: SearchBooksCategoryService) { }

  searchCategory() {
    console.log('saved');
    const observable = this.SearchBooksCategoryService.searchBooksCategory(this.searchBook)
    observable.subscribe((response: any) => {
      console.log(response);

    },

      function (error) {
        console.log(error.error.text);
      }
    )
  }

  ngOnInit(): void {
  }

}
