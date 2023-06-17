import { Request, Response } from "express";
import user from "../service/user";

async function createController(req: Request, res: Response) {
    const { email, password } = req.body;
    const create = await user.createService({ email, password });
    return res.json(create);
}

async function readController(req: Request, res: Response) {
    const read = await user.readService();
    return res.json(read);
}

async function updateController(req: Request, res: Response) {
    const { id } = req.params;
    const { email, password } = req.body;
    const update = await user.updateService(Number(id), { email, password })
}

export default { createController, readController, updateController };
