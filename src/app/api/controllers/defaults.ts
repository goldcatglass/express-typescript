import DefaultsService from '../services/defaults';
import { Request, Response, NextFunction } from 'express';

export class Controller {
    async all(req: Request, res: Response): Promise<void> {
        const result = await DefaultsService.all();
        res.json(result);
    }

    async one(req: Request, res: Response): Promise<void> {
        const result = await DefaultsService.one(req.params.id);
        if (result) {
            res.json(result);
        } else {
            res.status(404).end();
        }
    }

    async create(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        const result = await DefaultsService.create(req.body.name);
        res.status(201).json(result);
    }
}

export default new Controller();
