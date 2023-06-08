import { MigrationInterface, QueryRunner } from 'typeorm';
import CoffeeSeeds from '../seeds/coffee.seed';
import TeaSeeds from '../seeds/tea.seed';

export class SeedingMigration1686186593948 implements MigrationInterface {
  name = 'SeedingMigration1686186593948';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      CoffeeSeeds.map((seed) =>
        queryRunner.query(
          `INSERT INTO coffee ("title", "tag", "imageUrl") VALUES ('${seed.title}', '${seed.tag}', '${seed.imageUrl}')`,
        ),
      ),
    );

    await Promise.all(
      TeaSeeds.map((seed) =>
        queryRunner.query(
          `INSERT INTO tea ("title", "imageUrl") VALUES ('${seed.title}', '${seed.imageUrl}')`,
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

    await Promise.all(
      TeaSeeds.map((seed) =>
        queryRunner.query(`DELETE FROM tea WHERE title = '${seed.title}'`),
      ),
    );
  }
}
