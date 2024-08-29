import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import UserRequest from './request.validator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('new')
  createUser(@Body() user: UserRequest): Promise<User> {
    return this.usersService.create(user);
  }
}
