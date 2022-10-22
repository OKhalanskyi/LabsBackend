import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [];

  create(user: IUser) {
    this.users.push(user);
  }

  findAll():IUser[]{
    return this.users
  }
}
