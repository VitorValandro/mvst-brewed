import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CoffeeModule } from './modules/coffee/coffee.module';
import dataSource, { typeormDatabaseConfiguration } from './db/typeorm.config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'bucket'),
      serveRoot: join('/bucket'),
    }),
    TypeOrmModule.forRoot(typeormDatabaseConfiguration()),
    CoffeeModule,
  ],
  providers: [],
})
export class AppModule {}

dataSource.initialize();
