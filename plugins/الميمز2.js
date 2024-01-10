let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] افصل النص بـ *+*\n\n *مـثــال* :\n*${usedPrefix + command}* مانغا+انمي`

  if (!text) throw too
  if (!text.includes('+')) throw too  
  let [a, b] = text.split`+`   
  let imageUrl = "https://telegra.ph/file/035add29137055b2970ee.jpg"; 
  let lr = (`https://api.popcat.xyz/drake?text1=${a}&text2=${b}`)
  conn.sendFile(m.chat, imageUrl, 'drake.png', `*🎀┇meku bot*`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['2ميم']

export default handler