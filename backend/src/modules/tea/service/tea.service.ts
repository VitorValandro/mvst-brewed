import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from '../entities/tea.entity';
import { FindAllTeaQueryParamsDto } from '../dto/FindAllTeaQueryParams.dto';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(Tea)
    private readonly teaRepository: Repository<Tea>,
  ) {}

  async list(params: FindAllTeaQueryParamsDto): Promise<Tea[]> {
    const query = this.teaRepository.createQueryBuilder('tea');

    if (params.titleFilter) {
      query.andWhere('tea.title like :titleFilter', {
        titleFilter: `%${params.titleFilter}%`,
      });
    }

    query.skip(params.pageNumber * params.pageSize);
    query.take(params.pageSize);

    return query.getMany();
  }
}
