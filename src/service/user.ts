import { AppDataSource } from "..";
import { User } from "../entity/user";
import userDTO from "../interface/user";

const user = AppDataSource.getRepository(User);

async function createService(userDTO: userDTO) {
    const create = await user.save(userDTO);
    return create;
}

async function readService(): Promise<User[]> {
    const read = await user.find();
    return read;
}

async function findById(id: number) {
    const read = await user.findBy({id});
    return read;
}

async function updateService(id: number, userDTO: userDTO) {
    const update = await user.update(id, userDTO);
    return update;
}

async function deleteUser(id: number) {
    const deleteId = await user.delete(id);
    return deleteId;
}

export default { createService, readService, findById, updateService, deleteUser };
