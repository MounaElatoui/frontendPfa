import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './catego/categories/categories.component';
import { EditCategoryComponent } from './catego/edit-category/edit-category.component';
import { CategoryDetailComponent } from './catego/category-detail/category-detail.component';
import { BooksComponent } from './bookk/books/books.component';
import { BookDetailComponent } from './bookk/book-detail/book-detail.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  // { path: 'about',canActivate:[authGuard], component: AboutComponent },
 { path: 'categories', component: CategoriesComponent },
  { path: 'categories/edit/:id', component:EditCategoryComponent },
  { path: 'categories/:id', component:  CategoryDetailComponent },
  
   { path: 'books', component: BooksComponent },
   { path: 'books/edit/:id', component:BooksComponent},
   { path: 'books/:id', component:  BookDetailComponent },
/*
{ path: 'signin', component: SigninComponent },
  { path: 'about', component: AboutComponent },*/
  { path: '**', redirectTo: '/categories' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
