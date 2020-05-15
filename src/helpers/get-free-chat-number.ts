export default async function getFreeChatNumber (chatDBS : string[]) {
    let maxNum: number = 0;

    for (const chatDB of chatDBS) {
        const num = chatDB.split('_')[1];
        if (parseInt(num) > maxNum) {
            maxNum = parseInt(num);
        }
    }

    return maxNum + 1;
}