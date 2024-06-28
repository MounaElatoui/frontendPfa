import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { Book } from 'src/app/shared/book';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
 /* book: Book | undefined;
  idbook: any;
  categories: Category[] = [];

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BaseURL') public baseURL: any
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      res => {
        this.idbook = res.get('id');
        this.bookService.getBookById(this.idbook).subscribe(
          (book) => {
            this.book = book;
            // Fetch categories once book is fetched
            this.fetchCategories();
          }, 

          (error) => {
            console.error('Error fetching book details:', error);
          }
        );
      }
    );
  }

  fetchCategories() {
    this.bookService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },    
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((category) => category.id === categoryId);
    console.log("searched id "+categoryId);
    console.log("foand category id "+category);
    this.categories.forEach(element => {
      console.log("ids in the table "+element.id);
    });
    return category ? category.name : 'Unknown';
  }

  onBooks() {
    this.router.navigateByUrl('/books');
  }
}
*/



