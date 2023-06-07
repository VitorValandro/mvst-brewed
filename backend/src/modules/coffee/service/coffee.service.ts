import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';
import { FindAllCoffeeQueryParamsDto } from '../dto/FindAllCofffeeQueryParams.dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async list(params: FindAllCoffeeQueryParamsDto): Promise<Coffee[]> {
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

    query.skip(Number(params.pageNumber) * params.pageSize);
    query.take(params.pageSize);

    return query.getMany();
  }
}
