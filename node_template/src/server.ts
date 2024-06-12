import express, { Application } from 'express';
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config()

import { PORT } from './helpers/constants';

import userRouter from './routes/user.routes';

class Server {

    public app: Application;
    private port: number;
    private apiPaths: { [key: string]: string }

    constructor() {
        this.app = express();
        this.port = PORT;
        this.apiPaths = {
            user: '/user/'
        }

        this.middlewares();
        this.routes();
        this.treblleCofig();
    }

    private async treblleCofig() {

    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb' }));
    }

    private routes() {
        this.app.use(this.apiPaths.user, userRouter);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;