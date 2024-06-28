import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
isLoading: any;
Category: any;
onSubmit() {
throw new Error('Method not implemented.');
}

categories !:Category[]
isWaitingDelete:boolean=false;
isWaiting:boolean=true;
errMsg!:string
constructor(private router:Router,private categoryService:CategoryService){}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      {
        next:(categories:Category[])=>{this.categories=categories;this.isWaiting=false; this.errMsg=""},
        error:(err)=>{this.categories=[],this.isWaiting=false; this.errMsg=err}
      }
    )
    }
  onAddCategory(){
    this.router.navigateByUrl('/categories/edit/-1')
  }
onDelete(id:number){
  this.isWaitingDelete=true
  this.categoryService.deleteCategoryById(id).subscribe(
    {
      next:(res:any)=>{  
        this.isWaitingDelete=false
        let index = this.categories.findIndex(category => category.id === id);
        if (index != -1) {
          this.categories.splice(index, 1);
        }}
    }
  );

}
}
