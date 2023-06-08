import { Controller, Get, Query } from '@nestjs/common';
import { TeaService } from '../service/tea.service';
import { FindAllTeaQueryParamsDto } from '../dto/FindAllTeaQueryParams.dto';

@Controller('tea')
export class TeaController {
  constructor(private readonly teaService: TeaService) {}

  @Get()
  async getAll(@Query() query: FindAllTeaQueryParamsDto) {
    return this.teaService.list(query);
  }
}
