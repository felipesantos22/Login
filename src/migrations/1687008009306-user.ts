import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1687008009306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "userTest",
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
                        type: "numeric",
                    }
                ]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("userTest")
    }

}
