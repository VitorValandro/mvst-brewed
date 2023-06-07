import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
import { Coffee } from './src/modules/coffee/entities/coffee.entity';

config();

export const typeormDatabaseConfiguration = (): PostgresConnectionOptions => {
  const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    //entities: [Coffee],
    migrationsTableName: 'migrations',
    //migrations: [__dirname + '/src/db/migrations/*{.ts,.js}'],
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/db/migrations/*{.ts,.js}'],
    synchronize: true,
  };

  if (process.env.NODE_ENV !== 'local') {
    return {
      ...config,
      synchronize: false,
    };
  }

  return config;
};

export default new DataSource(typeormDatabaseConfiguration());
