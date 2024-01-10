let handler = async (m, { conn, command, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;

  try {
    const response = await fetch(`https://api-darkman.replit.app/que?query=dark%20man`);
    const data = await response.json();
    const result = data.result;

const fullResult = `❆❯━━━❲Miku❳━━━━━❮❆
الــســؤالـ❓:
${result}
❆❯━━━❲𝐵𝑜𝑡❳━━━━━❮❆
𝐵𝑦 Ayanakoji`;
    conn.reply(m.chat, fullResult, m);
} catch (error) {
    console.error('Error:', error);
    throw `حدث خطأ`;
}}

handler.help = ['que']
handler.tags = ['game']
handler.command = ['que','تجربه','بجرب']

export default handler