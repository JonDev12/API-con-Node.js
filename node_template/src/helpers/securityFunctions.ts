import { Request, Response } from "express";

export const authMiddleware = async (req: Request, res: Response, next: any) => {
    
}

export const handleError = (res: Response, ex: any) => {
    console.log(ex);
    const data = {
        errorMessage: ex.Message,
        errorData: ex
    }
    res.status(500).send(data);
}