import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';
import { FindAllCoffeeQueryParamsDto } from '../dto/FindAllCofffeeQueryParams.dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async list(params: FindAllCoffeeQueryParamsDto): Promise<Coffee[]> {
    return this.coffeeRepository.find({
      where: {
        title: params?.titleFilter ? Like(`%${params.titleFilter}%`) : undefined,
        tag: params?.tagFilter || undefined
      },
      skip: params.pageNumber * params.pageSize,
      take: params.pageSize
    })
  }
}
