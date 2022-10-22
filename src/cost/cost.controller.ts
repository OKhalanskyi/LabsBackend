import { Controller, Get, Param, Post } from "@nestjs/common";
import { CostService } from "./cost.service";
import { ICost } from "./cost.interface";

@Controller('cost')
export class CostController {
  constructor(private costService:CostService) {
  }

  @Post('create')
  async create(cost:ICost){
    return this.costService.create(cost)
  }

  @Get(':userId')
  async getByUser(@Param('userId') userId:number){
    return this.costService.findByUserId(userId)
  }

  @Get(':userId/:catId')
  async getByCategoryUserId(@Param('userId') userId:number, @Param('catId') catId:number){
    return this.costService.findByCategoryUserId(userId, catId)
  }



}
