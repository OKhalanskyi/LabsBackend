import { Injectable } from '@nestjs/common';
import { ICost } from './cost.interface';

@Injectable()
export class CostService {
  private readonly costs: ICost[] = [];

  create(cost: ICost) {
    this.costs.push(cost);
  }

  findByUserId(userId: number): ICost[] {
    return this.costs.filter((cost) => {
      return cost.userId === userId;
    });
  }

  findByCategoryUserId(userId: number, categoryId: number): ICost[] {
    return this.costs.filter((cost) => {
      return cost.userId === userId && cost.categoryId === categoryId;
    });
  }
}
