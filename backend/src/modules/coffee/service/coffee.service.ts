import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';
import { FindAllCoffeeDto } from '../dto/FindAllQueryParams.dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async list(query: FindAllCoffeeDto): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }
}
