import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { Book } from 'src/app/shared/book';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
 /* book: Book = new Book(null, '', '', 0, '', '', 0, '');
  isLoading: boolean = false;
  error: string = '';
  categories: Category[] = [];

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private categoryService: CategoryService,
    //private fileUploadService: FileUploadService,
    @Inject('BaseURL') public baseUrl: string
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.route.paramMap.subscribe(result => {
      let id = result.get('id');
      if (id && id !== "-1") {
        this.initBook(id);
      }
    });
  }

  initBook(id: any): void {
    this.bookService.getBookById(id).subscribe(
      book => {
        this.book = book;
      },
      error => {
        console.error('Error fetching Book:', error);
      }
    );
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  isFormValid(): boolean {
    return (
      this.book.nom !== " "&&
      this.book.auteur !== '' &&
      this.book.prix > 0 &&
      this.book.description !== '' &&
      this.book.code !== '' &&
      this.book.categoryId !== null
    );
  }

  onSubmit(): void {
    const selectedCategory = this.categories.find(category => category.id === this.book.categoryId);

    if (selectedCategory) {
      this.book.categoryId = selectedCategory.id;
    } else {
      this.error = 'Selected category is invalid';
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    if (this.book.id === null) {
      this.bookService.addBook(this.book, this.book.categoryId).subscribe({
        next: (newBook: Book) => {
          this.error = '';
          this.upload(newBook);
        },
        error: (err) => {
          this.error = err.message || 'Failed to add book.';
          console.error('Error adding book:', err);
          this.isLoading = false;
        }
      });
    } else {
      this.bookService.updateBook(this.book.id, this.book, this.book.categoryId).subscribe({
        next: (updatedBook: Book) => {
          this.error = '';
          this.upload(updatedBook);
        },
        error: (err) => {
          this.error = err.message || 'Failed to update book.';
          console.error('Error updating book:', err);
          this.isLoading = false;
        }
      });
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(book: Book): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.fileUploadService.upload(this.currentFile, book.id).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.router.navigateByUrl('/books');
              this.isLoading = false;
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            this.message = err.error?.message || 'Could not upload the file!';
            this.currentFile = undefined;
          }
        });
      } else {
        this.selectedFiles = undefined;
        this.router.navigateByUrl('/books');
        this.isLoading = false;
      }
    } else {
      this.router.navigateByUrl('/books');
      this.isLoading = false;
    }
  }

  onBooks(): void {
    this.router.navigateByUrl('/books');
  }

}*/
