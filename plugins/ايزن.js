const dir = [
'https://telegra.ph/file/97a8760f45a0088d24c1d.mp4',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايزن', 'عمي'] 

export default handler