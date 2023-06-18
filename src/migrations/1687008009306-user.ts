import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1687008009306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "numeric",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    }
                ]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("userTest")
    }

}
