import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [
    {id:1,name:"Vova"},
    {id:2,name:"Ivan"},
    {id:3,name:"Mark"},
    {id:4,name:"Bogdan"}
  ];

  create(user: IUser) {
    this.users.push(user);
  }

  findAll():IUser[]{
    return this.users
  }
}
