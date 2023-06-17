import { AppDataSource } from ".";
import 'dotenv/config'
import app from "./app";

const PORT = process.env.PORT;

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}.`));
    })
    .catch((error) => console.log(error));
