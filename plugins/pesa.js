const { cmd } = require('../command');
const config = require("../config");

cmd({
    pattern: "pay",
    alias: ["pesa"],
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭───❍SUPPORT🥹🫡❍*
‎*├⬡ .HALOTEL LIPA NUMBER 23512624 JINA STANY TECH MEDIA*
‎*├⬡ .Halotel*
‎*╰───────────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xmo2xp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399268034293@newsletter',
                        newsletterName: "PAYMENT METHOD ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
