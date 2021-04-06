import { ToastrService } from 'ngx-toastr';
import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  showToastr(category: Category) {
    this.toastr.success(category.body);
  }
}
