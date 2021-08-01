const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════💖𝙹𝚁_𝙽𝙸𝙷𝙰𝙻💖═════╗*\n           \n*⚜═𝔻𝕖𝕒𝕕𝕡𝕠𝕠𝕝═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫 - http://Wa.me/+918078391406*\n*            *\n*╚══════𝙱𝙾𝚃𝚃𝙰𝙽𝙽𝙰𝙽═════╝*\n\n*▷Creator: 𝙹𝚁 𝙽𝙸𝙷𝙰𝙻*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥=𝕠𝕨𝕟𝕖𝕣 𝙹𝚁 𝙽𝙸𝙷𝙰𝙻═💥*\n\n*💘https://github.com/Jrnihalv2/Deadpool*\n*     *\n💓ℙ𝕚𝕜𝕒𝕔𝕙𝕦═𝕆𝕨𝕟𝕖𝕣 𝔸𝕞𝕖𝕖𝕣 𝕜𝕒𝕝𝕝𝕦𝕞𝕥𝕙𝕠𝕕𝕚═*\n\n*⚜https://github.com/ameer-kallumthodi/Pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔════💖𝙹𝚁_𝙽𝙸𝙷𝙰𝙻💖════╗*\n           \n*⚜═𝙹𝚁 𝙱𝙾𝚃𝚃𝙰𝙽𝙽𝙰𝙽═⚜*\n\n*𝕠𝕨𝕟𝕖𝕣 𝕁ℝ ℕ𝕀ℍ𝔸𝕃 - http://Wa.me/+919567941560*\n*            *\n*╚══════💖𝙹𝚁_𝙽𝙸𝙷𝙰𝙻💖═════╝*\n\n*▷Creator: 𝙹𝚁 NIHAL💘*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝙱𝚃𝚃𝙰𝙽𝙽𝙰𝙽 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙹𝚁 𝙽𝙸𝙷𝙰𝙻═💥*\n\n*💘https://github.com/Jrnihalv2/Deadpool*\n*     *\n💓ℙ𝕚𝕜𝕒𝕔𝕙𝕦═𝕆𝕨𝕟𝕖𝕣 𝔸𝕞𝕖𝕖𝕣 𝕜𝕒𝕝𝕝𝕦𝕞𝕥𝕙𝕠𝕕𝕚═*\n\n*⚜https://github.com/ameer-kallumthodi/Pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
