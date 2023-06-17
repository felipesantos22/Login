import { Request, Response } from "express";
import user from "../service/user";
import { hash } from "bcrypt";

async function createController(req: Request, res: Response) {
    const { email, password } = req.body;
    // const passwordHash = await hash(password, 8);
    // const userTest = {
    //     email,
    //     password: passwordHash
    // }
    const create = await user.createService({ email, password });
    return res.json(create);
}

async function readController(req: Request, res: Response) {
    const read = await user.readService();
    return res.json(read);
}

async function findByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const byId = await user.findById(+id);
    return res.json(byId);
}

async function updateController(req: Request, res: Response) {
    const { id } = req.params;
    const { email, password } = req.body;
    const update = await user.updateService(Number(id), { email, password });
    return res.json({ message: "Update successful" });
}

async function deleteUserController(req: Request, res: Response) {
    const { id } = req.params;
    const deleteId = await user.deleteUser(+id);
    return res.json({ message: "Deleted" });
}

export default { createController, readController, findByIdController, updateController, deleteUserController };
