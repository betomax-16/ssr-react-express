import express from "express";
import path from "path";
import { Request, Response, Router } from "express";

class Routes {
    public router: Router;

    constructor() {
        this.router = express.Router();    

        this.router.get('*', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, 'static/index.html'));
        });
    }
}

export default new Routes().router;