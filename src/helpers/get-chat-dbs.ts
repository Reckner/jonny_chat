import sql from '../lib/mysql';

export default async function getChatDBS() :Promise<string[]> {
    const databases = await sql.queryAsync('SHOW DATABASES');

    const chatDBS :string[] = [];
    for (const rowDataPacket of databases) {
        const name :string = rowDataPacket.Database;

        if (name.includes('chat_')) {
            chatDBS.push(name)
        }
    }

    return chatDBS;
}