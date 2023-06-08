import { Module } from '@nestjs/common';
import { TeaController } from './api/tea.controller';
import { Tea } from './entities/tea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeaService } from './service/tea.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  providers: [TeaService],
  controllers: [TeaController],
})
export class TeaModule {}
