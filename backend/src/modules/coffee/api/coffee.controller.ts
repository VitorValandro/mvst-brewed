import { Controller, Get, Query } from '@nestjs/common';
import { CoffeeService } from '../service/coffee.service';
import { FindAllCoffeeQueryParamsDto } from '../dto/FindAllCofffeeQueryParams.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async getAll(@Query() query: FindAllCoffeeQueryParamsDto) {
    return this.coffeeService.list(query);
  }
}
