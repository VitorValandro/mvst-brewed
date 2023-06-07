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

  async list(params: FindAllCoffeeDto): Promise<Coffee[]> {
    const query = this.coffeeRepository.createQueryBuilder('coffee');

    if (params.titleFilter) {
      query.andWhere('coffee.title like :titleFilter', {
        titleFilter: `%${params.titleFilter}%`,
      });
    }

    if (params.titleFilter) {
      query.andWhere('coffee.tag = :tagFilter', {
        tagFilter: params.tagFilter,
      });
    }

    query.skip(params.pageNumber || 0);
    query.take(params.pageSize || 10);

    return query.getMany();
  }
}
