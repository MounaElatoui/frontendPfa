import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { FeaturesComponent } from './home/features/features.component';
import { CategoriesComponent } from './catego/categories/categories.component';
import { CategoryComponent } from './catego/category/category.component';
import { CategoryDetailComponent } from './catego/category-detail/category-detail.component';
import { EditCategoryComponent } from './catego/edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseURL } from './shared/baseurl';
import { BooksComponent } from './bookk/books/books.component';
import { EditBookComponent } from './bookk/edit-book/edit-book.component';
import { BookDetailComponent } from './bookk/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    FeaturesComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryDetailComponent,
    EditCategoryComponent,
    BooksComponent,
    EditBookComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  {provide: 'BaseURL', useValue: BaseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
