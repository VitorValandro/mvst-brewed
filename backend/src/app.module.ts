import { join, resolve } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CoffeeModule } from './modules/coffee/coffee.module';
import dataSource, { typeormDatabaseConfiguration } from '../typeorm.config';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      (() => {
        const bucketDir = resolve('./bucket');
        return {
          rootPath: bucketDir,
          serveRoot: join('/bucket'),
        };
      })(),
    ),
    TypeOrmModule.forRoot(typeormDatabaseConfiguration()),
    CoffeeModule,
  ],
  providers: [],
})
export class AppModule {}

dataSource.initialize();
