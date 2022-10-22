import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ICategory } from "./category.interface";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService:CategoryService) {
  }

  @Post('create')
  async create(@Body() category:ICategory){
    return this.categoryService.create(category)
  }

  @Get('all')
  async findAll():Promise<ICategory[]>{
    return this.categoryService.findAll()
  }
}
