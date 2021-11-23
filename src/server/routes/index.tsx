import express from "express";
import path from "path";
import fs from "fs";
import { Request, Response, Router } from "express";
import reactDom from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "../../client/component/app";

class Routes {
    public router: Router;

    constructor() {
        this.router = express.Router();    

        this.router.get('*', (req: Request, res: Response) => {
            const context = {};
            const html = reactDom.renderToString(
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            );

            const indexField = path.resolve('./build/static/index.html');
            
            fs.readFile(indexField, 'utf8', (err, data) => {
                if (err) {
                    console.log('Error!!!');
                }

                return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
            })
            // res.send(html);
            // res.sendFile(path.join(__dirname, 'static/index.html'));
        });
    }
}

export default new Routes().router;