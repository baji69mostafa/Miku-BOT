import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const jimp_1 = require('jimp');

const handler = async (m, { conn, command, usedPrefix }) => {
    try {
        const q = m.quoted ? m.quoted : m;
        const mime = (q.msg || q).mimetype || q.mediaType || '';

        if (/image/g.test(mime) && !/webp/g.test(mime)) {
            const media = await q.download();
            const { img } = await pepe(media);

            await conn.query({
                tag: 'iq',
                attrs: {
                    to: m.chat,
                    type: 'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            });

            m.reply(`*✳️ تم تغيير الإفتار بنجاح*`, null, { mentions: [m.sender] });
        } else {
            m.reply(`✳️ قم بالرد على صورة لاستخدام الأمر: *${usedPrefix + command}*`);
        }
    } catch (e) {
        console.log(e);
        m.reply(`❌ حدث خطأ`);
    }
};

handler.help = ['setppgc', 'setppgcpanjang'];
handler.tags = ['group'];
handler.command = /^(setppgc|dk)$/i;
handler.rowner = true;

export default handler;

async function pepe(media) {
    const jimp = await jimp_1.read(media);
    const min = jimp.getWidth();
    const max = jimp.getHeight();
    const cropped = jimp.crop(0, 0, min, max);

    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
    };
}