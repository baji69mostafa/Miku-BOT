import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`*[❣️]~ حبي ضيف اسم الانمي ال تبحث عنه*`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'ar', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'ar', autoCorrect: true })   
let AnimeInfo = `
❏ *الاسم:* ${result.title}
❏ *العرض:* ${result.type}
❏ *الحلقات:* ${result.episodes}
❏ *المدة:* ${result.duration}
❏ *مقتبس من:* ${result.source.toUpperCase()}
❏ *البداية:* ${result.aired.from}
❏ *الانتهاء:* ${result.aired.to}
❏ *الشعبية:* ${result.popularity}
❏ *المفضلة:* ${result.favorites}
❏ *التصنيف:* ${result.rating}
❏ *المركز:* ${result.rank}
❏ *التيلر:* ${result.trailer.url}
❏ *لمحة:* ${resultes.text}
❏ *سيرة:* ${resultes2.text}
❏ *انمي ليست:* ${result.url}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*[❣️]~ خطأ، حاول مرة أخرى*`  
}}
handler.command = /^(انيمي)$/i
export default handler 
