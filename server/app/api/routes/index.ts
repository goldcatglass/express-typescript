import * as express from 'express';
import defaults from './defaults';

const router = express.Router();

router.use('/assets', defaults);

export default router;