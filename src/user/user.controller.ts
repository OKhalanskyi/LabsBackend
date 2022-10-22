import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {
  }

  @Post('create')
  async create(user:IUser){
    return this.userService.create(user)
  }

  @Get('all')
  async findAll(){
    return this.userService.findAll()
  }
}
