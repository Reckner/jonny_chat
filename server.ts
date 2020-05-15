import Koa from 'koa';
import cors from '@koa/cors';
import { logger } from './src/config/winston';
import { loggerMiddleWare } from './src/middlewares/logger';
import { clearOldLogs } from './src/helpers/clear-old-logs';
import { publicRouter } from './src/router/public';

const app = new Koa();
const port = process.env.PORT || 5001;

clearOldLogs();

(async function startService() {
    try {

        app.use(cors({
            keepHeadersOnError: true,
            allowHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept'],
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
            origin: 'http://localhost:3000'
        }));

        app.use(loggerMiddleWare(logger));

        app.use(publicRouter.routes());

        app.listen(port);

        logger.info(`Chat service started on port ${port}`);
    } catch {
        logger.info('Shutting down...');
    }
})();
