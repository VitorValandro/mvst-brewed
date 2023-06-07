import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeChallengeController } from './modules/coffee/coffee.controller';
import { CodeChallengeModule } from './modules/coffee/coffee.module';
import dataSource, { typeormDatabaseConfiguration } from './db/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormDatabaseConfiguration()),
    CodeChallengeModule,
  ],
  controllers: [CodeChallengeController],
  providers: [],
})
export class AppModule {}

dataSource.initialize();
