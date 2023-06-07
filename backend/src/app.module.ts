import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeChallengeController } from './modules/code-challenge/code-challenge.controller';
import { CodeChallengeModule } from './modules/code-challenge/code-challenge.module';
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
