import { Module } from '@nestjs/common';
import { CodeChallengeController } from './coffee.controller';
import { Coffee } from './coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CodeChallengeController],
  providers: [],
})
export class CodeChallengeModule {}
