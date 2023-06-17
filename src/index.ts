import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user"
import { User1687008009306 } from "./migrations/1687008009306-user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "yellowfit",
    entities: [User],
    migrations:[User1687008009306],
    synchronize: true,
    logging: false,
})