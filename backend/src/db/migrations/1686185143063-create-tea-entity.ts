import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTeaEntity1686185143063 implements MigrationInterface {
  name = 'CreateTeaEntity1686185143063';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tea" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "imageUrl" character varying(255) NOT NULL, CONSTRAINT "PK_b49762d74c31218998d22ac3e18" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tea"`);
  }
}
