import { Injectable } from '@nestjs/common';
import { ICategory } from './category.interface';

@Injectable()
export class CategoryService {
  private readonly categories: ICategory[] = [
    {id:1,title:"food"},
    {id:2,title:"sport"},
    {id:3,title:"travel"},
    {id:4,title:"cars"}
  ];

  create(category: ICategory) {
    this.categories.push(category);
  }

  findAll(): ICategory[] {
    return this.categories;
  }
}
