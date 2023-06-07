import { Module } from '@nestjs/common';
import { CoffeeController } from './api/coffee.controller';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeService } from './service/coffee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeeService],
  controllers: [CoffeeController],
})
export class CoffeeModule {}
