import * as express from 'express';
import { Application } from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import * as cookieParser from 'cookie-parser';
import swaggerify from './api/swagger';
import logger from '../logger';

const app = express();

export default class ExpressServer {
    constructor() {
        const root = path.normalize(__dirname + '/..');
        app.set('appPath', root + 'client');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser(process.env.SESSION_SECRET));
    }

    router(routes: (app: Application) => void): ExpressServer {
        swaggerify(app, routes);
        return this;
    }

    listen(port: number = 3000): Application {
        const welcome = PORT => () =>
            logger.info(
                `server running in ${process.env.NODE_ENV ||
                    'development'} ${os.hostname()} on port: ${PORT}}`,
            );
        http.createServer(app).listen(port, welcome(port));
        return app;
    }
}
