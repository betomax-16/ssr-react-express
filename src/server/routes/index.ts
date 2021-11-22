import * as express from "express";
import { Request, Response, Router } from "express";
import { ResponseWrapper } from "../utils/responseWrapper";
import { Errors } from "../utils/errors";

class Routes {
    public router: Router;

    constructor() {
        this.router = express.Router();    

        this.router.get('/', (req: Request, res: Response) => {
            try {
                const data: any = { messge: 'hola mundo' };
                ResponseWrapper.handler(res, data, 200);
            } catch (error: any) {
                Errors.handler(error, res);
            }
        });
    }
}

export default new Routes().router;