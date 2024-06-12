import { Request, Response } from "express";
import { handleError} from '../helpers/securityFunctions';

export const users = async (req: Request, res: Response) => {
    try {
       
        res.json({
            status: true,
            users: []
        });
    } catch (ex) {
        handleError(res, ex)
    }
}
