import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCoffeeEntity1686102123616 implements MigrationInterface {
  name = 'CreateCoffeeEntity1686102123616';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."coffee_tag_enum" AS ENUM('ARABIC', 'ROBUSTA')`,
    );
    await queryRunner.query(
      `CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "tag" "public"."coffee_tag_enum" NOT NULL DEFAULT 'ARABIC', "imageUrl" character varying(255) NOT NULL, CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "coffee"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_tag_enum"`);
  }
}
