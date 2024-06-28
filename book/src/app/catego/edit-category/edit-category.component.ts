
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: Category = new Category(null, ''); // Initialise avec une nouvelle catégorie vide
  isLoading: boolean = false;
  errMail: string = '';
  progress = 0;
  message = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    @Inject('BaseURL') public baseUrl: string
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
      let id = result.get('id');
      if (id !== '-1') {
        this.initCategory(id);
      } else {
        this.category = new Category(null, ''); // Nouvelle catégorie vide pour l'ajout
      }
    });
  }

  initCategory(id: any) {
    this.categoryService.getCategoryById(id).subscribe(
      category => {
        this.category = category;
      },
      error => {
        console.error('Error fetching category:', error);
      }
    );
  }

  onSubmit() {
    this.isLoading = true;

    if (this.category.id == null) {
      // Ajout d'une nouvelle catégorie
      this.categoryService.addCategory(this.category).subscribe({
        next: (newCategory: Category) => {
          this.errMail = '';
          this.router.navigateByUrl('/categories'); // Redirection vers la liste des catégories après ajout
        },
        error: (err) => {
          this.errMail = err.message || 'Failed to add category.';
          console.error('Error adding category:', err);
          this.isLoading = false;
        }
      });
    } else {
      // Mise à jour d'une catégorie existante
      this.categoryService.updateCategory(this.category).subscribe({
        next: (updatedCategory: Category) => {
          this.errMail = '';
          this.router.navigateByUrl('/categories'); // Redirection vers la liste des catégories après mise à jour
        },
        error: (err) => {
          this.errMail = err.message || 'Failed to update category.';
          console.error('Error updating category:', err);
          this.isLoading = false;
        }
      });
    }
  }
}
