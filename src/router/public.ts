import { logger } from '../config/winston';
import Router from 'koa-router';
import readSqlFromFile from '../helpers/read-sql-from-file';
import getChatDBS from '../helpers/get-chat-dbs';
import getFreeChatNumber from '../helpers/get-free-chat-number';
import sql from '../lib/mysql';


const publicRouter = new Router();

publicRouter.post('/chat', async (ctx) => {

    const chatDBS = await getChatDBS();
    const freeChatNumber = await getFreeChatNumber(chatDBS);


    const chatSQL = readSqlFromFile('../sql/chat.sql');
    const messagesSQL = readSqlFromFile('../sql/message.sql');
    
    try {
        sql.query('CREATE DATABASE chat_?'.replace('?', freeChatNumber.toString()));
        sql.query(chatSQL.replace('?', freeChatNumber.toString()));
        sql.query(messagesSQL.replace('?', freeChatNumber.toString()));

        ctx.status = 200;
    } catch (err) {
        logger.error('Error Creating Chat');
        ctx.status = 400;
        ctx.body = err;
    }
});

export {
    publicRouter,
}