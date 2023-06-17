import { AppDataSource } from "..";
import { User } from "../entity/user";
import userDTO from "../interface/user";


async function createService(userDTO: userDTO) {
    const user = AppDataSource.getRepository(User);
    const create = await user.save(userDTO);
    return create;
}

async function readService() {
    const user = AppDataSource.getRepository(User);
    const read = await user.find();
    return read;
}

async function updateService(id: number, userDTO: userDTO) {
    const user = AppDataSource.getRepository(User);
    const update = await user.update(id, userDTO);
    return update;
}

export default { createService, readService , updateService};
