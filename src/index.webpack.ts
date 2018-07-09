import * as dotenv from 'dotenv';
dotenv.config();

import Server from './app';
import routes from './routes';

const port = parseInt(process.env.PORT || '3000', null);
declare const module: any;

async function bootstrap() {
    const app = new Server().router(routes).listen(port);

    if (module.hot) {
        module.hot.accept();
    }
}

bootstrap();
