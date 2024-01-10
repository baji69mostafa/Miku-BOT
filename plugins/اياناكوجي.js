const dir = [
'https://telegra.ph/file/fbe8b6804e2a74aaa3947.mp4',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['كوجي', 'اياناكوجي'] 

export default handler