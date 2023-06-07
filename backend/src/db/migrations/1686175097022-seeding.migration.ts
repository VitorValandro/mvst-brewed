import { MigrationInterface, QueryRunner } from 'typeorm';
import CoffeeSeeds from '../seeds/coffee.seed';

export class SeedingMigration1686175097022 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      CoffeeSeeds.map((seed) =>
        queryRunner.query(
          `INSERT INTO coffee ("title", "tag", "imageUrl") VALUES ('${seed.title}', '${seed.tag}', '${seed.imageUrl}')`,
        ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      CoffeeSeeds.map((seed) =>
        queryRunner.query(`DELETE FROM coffee WHERE title = '${seed.title}'`),
      ),
    );
  }
}
