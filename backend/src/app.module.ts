import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './modules/coffee/coffee.module';
import dataSource, { typeormDatabaseConfiguration } from '../typeorm.config';
import { TeaModule } from './modules/tea/tea.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormDatabaseConfiguration()),
    CoffeeModule,
    TeaModule,
  ],
  providers: [],
})
export class AppModule {}

dataSource.initialize();
