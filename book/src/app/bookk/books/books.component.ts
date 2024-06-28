import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

/*
   books!:Book[]
    errMsg!:string
    isWaiting:boolean=false;
    isWaitingDelete:boolean=false;
    constructor(private router:Router,private bookService:BookService,
      private categoryService: CategoryService,

    ){}
    ngOnInit(): void {
      this.bookService.getBooks().subscribe(
        {
          next: (books: Book[]) => { this.books = books; this.isWaiting = false; this.errMsg = "" },
          error: (err) => { this.books = [], this.isWaiting = false; this.errMsg = err }
        }
      )
    }


  onDelete(id: number ) {
    this.isWaitingDelete = true
    console.log(`Deleting book with ID: ${id}`);

    this.bookService.deleteBookById(id).subscribe(
      {
        next: (res: any) => {
          console.log(`Successfully deleted book with ID: ${id}`);

          this.isWaitingDelete = false
          let index = this.books.findIndex(book => book.id === id);
          if (index != -1) {
            this.books.splice(index, 1);
          }
        },
        error: (err: any) => {
          this.isWaitingDelete = false;
          console.error('Failed to delete book:', err);
      }
      }
    );

  }

onAddBook() {
 console.log("emchi bras omek ")
  this.router.navigateByUrl('/books/edit/-1')
}*/

}
