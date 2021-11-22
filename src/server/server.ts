import * as express from "express";
import { Application, Request, Response, NextFunction } from "express";
import router from "./routes";

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
		this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/', router);
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
    }
}

export default new Server();