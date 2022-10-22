import { Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ICategory } from "./category.interface";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService:CategoryService) {
  }

  @Post('create')
  async create(category:ICategory){
    return this.categoryService.create(category)
  }

  @Get('all')
  async findAll(){
    return this.categoryService.findAll()
  }
}
