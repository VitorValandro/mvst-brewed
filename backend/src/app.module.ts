import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './modules/coffee/coffee.module';
import dataSource, { typeormDatabaseConfiguration } from '../typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormDatabaseConfiguration()),
    CoffeeModule,
  ],
  providers: [],
})
export class AppModule {}

dataSource.initialize();
