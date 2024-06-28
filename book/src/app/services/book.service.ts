import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../shared/book';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Category } from '../shared/category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient,
    @Inject('BaseURL') private baseURL: any,
    private processHttpmsgService: ProcessHttpmsgService
  ) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/books`).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
  }

  getBookById(id: number  ): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/books/${id}`).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
  }

  /*deleteBookById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/books/${id}`).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
  }*/deleteBookById(id: number): Observable<any> {
    const url = `${this.baseURL}/books/${id}`;
    console.log(`Making HTTP DELETE request to: ${url}`);
    return this.httpClient.delete<any>(url).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
}



  addBook(book: Book, categoryId: number): Observable<Book> {
    const payload = { ...book, categoryId };
    return this.httpClient.post<Book>(`${this.baseURL}/books`, payload, this.httpOptions).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
  }

  updateBook(id: number, book: Book, categoryId: number): Observable<Book> {
    const payload = { ...book, categoryId };
    return this.httpClient.put<Book>(`${this.baseURL}/books/${id}`, payload, this.httpOptions).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}/categories`).pipe(
      catchError(this.processHttpmsgService.handleError)
    );
  }
}
