import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import path from "path";
import router from "./routes";
import routerApi from "./routes/api";

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.use('/', express.static(path.join(__dirname, 'static')));
		this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/', router);
        this.app.use('/api', routerApi);
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
    }
}

export default new Server();