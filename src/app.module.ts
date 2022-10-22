import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { CostModule } from './cost/cost.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(),UserModule, CategoryModule, CostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
