import { Injectable } from '@nestjs/common';
import { ICategory } from './category.interface';

@Injectable()
export class CategoryService {
  private readonly categories: ICategory[] = [];

  create(category: ICategory) {
    this.categories.push(category);
  }

  findAll(): ICategory[] {
    return this.categories;
  }
}
