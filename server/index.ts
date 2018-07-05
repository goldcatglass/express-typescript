import * as dotenv from 'dotenv';
dotenv.config();

import Server from './app';
import routes from './routes';

const port = parseInt(process.env.PORT);

export default new Server().router(routes).listen(port);
