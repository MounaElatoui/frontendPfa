import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent  implements OnInit {

  category: Category | undefined;
  idCategory: any;
  constructor(private contactService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BaseURL') public baseURL:any) { }

  ngOnInit(): void {
    //snapshot
    //this.idContact=this.route.snapshot.params['id'];
    //Asynchrone avec RxJS
    this.route.paramMap.subscribe(
      res => {
        this.idCategory = res.get('id');
        this.contactService.getCategoryById(this.idCategory
        ).subscribe(
          (category) => { this.category = category }
        );
      }
    )

  }



}
