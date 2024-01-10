const dir = [
'https://telegra.ph/file/d731268e29d806739a7ca.mp4',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ميكي', 'عمتي'] 

export default handler