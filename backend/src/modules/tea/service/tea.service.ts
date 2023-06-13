import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Tea } from '../entities/tea.entity';
import { FindAllTeaQueryParamsDto } from '../dto/FindAllTeaQueryParams.dto';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(Tea)
    private readonly teaRepository: Repository<Tea>,
  ) {}

  async list(params: FindAllTeaQueryParamsDto): Promise<Tea[]> {
    return this.teaRepository.find({
      where: {
        title: params?.titleFilter ? Like(`%${params.titleFilter}%`) : undefined,
      },
      skip: params.pageNumber * params.pageSize,
      take: params.pageSize
    })
  }
}
