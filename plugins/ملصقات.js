import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn }) => {
    if (!db.data.chats[m.chat]?.stickers && m.isGroup) throw 0;

    let nombre = '𝐒𝐡𝐚𝐝𝐨𝐰';
    let nombre2 = '𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅';

    const s = [
        'https://telegra.ph/file/a669fcbfcb103aa74055b.jpg',
        'https://telegra.ph/file/c70d42d26dcb408e92599.jpg',

    ];

    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2);
    await delay(5 * 1000); // Changed 5000 to 1000

    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, {
            contextInfo: {
                'forwardingScore': 200,
                'isForwarded': false,
                externalAdReply: {
                    showAdAttribution: false,
                    title: wm, // You need to define wm before using it
                    body: `h`,
                    mediaType: 2,
                    sourceUrl: nn, // You need to define nn before using it
                    thumbnail: imagen1 // You need to define imagen1 before using it
                }
            }
        }, { quoted: m });
    }
};

handler.customPrefix = /^شادو/i; // Updated customPrefix regex
handler.command = /^(?:)$/; // Add your command regex
handler.exp = 50;

export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));