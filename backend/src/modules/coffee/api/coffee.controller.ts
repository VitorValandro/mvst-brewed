import { Controller, Get, Query } from '@nestjs/common';
import { CoffeeService } from '../service/coffee.service';
import { FindAllCoffeeDto } from '../dto/FindAllQueryParams.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async getAll(@Query() query: FindAllCoffeeDto) {
    return this.coffeeService.list(query);
  }
}
