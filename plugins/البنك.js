let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌الاسم* : _@${who.split('@')[0]}_
▢ *💎الماس* : _${user.limit}_
▢ *💎الذهب* : _${user.gold}_
▢ *💎روك* : _${user.rock}_
▢ *💎EMARALD* : _${user.emerald}_
▢ *💎الرتبه* : _${user.role}_
▢ *💎الصحه* : _${user.health}_
▢ *💎الخشب* : _${user.wood}_
▢ *💎الجرعات* : _${user.potion}_
▢ *💎حديد* : _${user.iron}_
▢ *💎المال* : _${user.money}_
▢ *⬆️XP* : _الإجمالي ${user.exp}_
└──────────────

*ملحوظه :* 
يمكنك شراء 💎 الماس باستخدام الأوامر*
❏ *.شراء 1
❏ *ويمكنك مضاعفة الكميه*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'البنك', 'diamond', 'balance'] 

export default handler