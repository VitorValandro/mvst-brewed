import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { Coffee } from './coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeService } from './coffee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeeService],
  controllers: [CoffeeController],
})
export class CoffeeModule {}
