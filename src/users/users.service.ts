import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersRepository.create(createUserDto);
      await this.usersRepository.save(user);
      return user;
    } catch (error) {
      throw new Error('Error creating a user');
    }
  }

  async findAll() {
    try {
      const user = await this.usersRepository.find();
      return user;
    } catch (error) {
      throw new Error('Error to find all users');
    }
  }
}
