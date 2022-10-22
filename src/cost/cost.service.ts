import { Injectable } from '@nestjs/common';
import { ICost } from './cost.interface';

@Injectable()
export class CostService {
  private readonly costs: ICost[] = [
    {id:1,userId:1,categoryId:1,createdAt:new Date(),total:100},
    {id:2,userId:1,categoryId:2,createdAt:new Date(),total:1200},
    {id:3,userId:2,categoryId:3,createdAt:new Date(),total:40000},
    {id:4,userId:2,categoryId:4,createdAt:new Date(),total:23000000},
    {id:5,userId:3,categoryId:2,createdAt:new Date(),total:1500},
    {id:6,userId:3,categoryId:4,createdAt:new Date(),total:550000},
    {id:7,userId:4,categoryId:1,createdAt:new Date(),total:1000},
    {id:8,userId:4,categoryId:3,createdAt:new Date(),total:9000}
  ];

  create(cost: ICost) {
    this.costs.push(cost);
  }

  findByUserId(userId: number): ICost[] {
    return this.costs.filter((cost) => {
      return cost.userId == userId;
    });
  }

  findByCategoryUserId(userId: number, categoryId: number): ICost[] {
    return this.costs.filter((cost) => {
      return cost.userId == userId && cost.categoryId == categoryId;
    });
  }
}
