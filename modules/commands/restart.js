module.exports.config = {
    name: "restart",
    version: "2.0.2",
    hasPermssion: 0,
    credits: "Mirai Team mod by Vdang",
    description: "Khởi động lai bot",
    commandCategory: "Hệ thống admin-bot",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  if (event.senderID != 61561130424674) return api.sendMessage(`Tuổi?`, event.threadID, event.messageID)
if(args.length == 0) api.sendMessage(`𝘽𝙤𝙩 𝙘𝙤́ 𝙨𝙪̛̣ 𝙘𝙝𝙤 𝙥𝙝𝙚́𝙥 𝙘𝙪̉𝙖 𝙖𝙙𝙢𝙞𝙣 𝙣𝙚̂𝙣 𝙨𝙚̃ 𝙞̉𝙖 𝙨𝙖𝙪 𝙫𝙖̀𝙞 𝙥𝙝𝙪́𝙩\n`+`🌸🌸🌸『 𝙍𝙀𝙎𝙏𝘼𝙍𝙏 』🌸🌸🌸\n𝐁𝐨𝐭 𝐬𝐞̃ 𝐤𝐡𝐨̛̉𝐢 𝐝̄𝐨̣̂𝐧𝐠 𝐥𝐚̣𝐢 𝐬𝐚𝐮: ${gio}s\n[⏰] 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio}:${phut}:${giay}\n`+`🤖𝐁𝐨𝐭: 𝘾𝙝𝙤 𝙗𝙤̂́ 𝙢𝙖̀𝙮 𝙙𝙞 𝙞̉𝙖\n——————————————————\n👉𝙏𝙞𝙚̂́𝙣 𝙝𝙖̀𝙣𝙝 𝙘𝙝𝙖̣𝙮 𝙫𝙤̂ 𝙘𝙖̂̀𝙪 𝙙𝙞 𝙞̉𝙖!!!`,event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`🌸🌸🌸『 𝙍𝙀𝙎𝙏𝘼𝙍𝙏 』🌸🌸🌸\n𝐁𝐨𝐭 𝐬𝐞̃ 𝐤𝐡𝐨̛̉𝐢 𝐝̄𝐨̣̂𝐧𝐠 𝐥𝐚̣𝐢 𝐬𝐚𝐮: ${gio}s\n[⏰] 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio}:${phut}:${giay}`, threadID), 0)
setTimeout(() =>
api.sendMessage("🤖𝐁𝐨𝐭: 𝘾𝙝𝙤 𝙗𝙤̂́ 𝙢𝙖̀𝙮 𝙙𝙞 𝙞̉𝙖\n——————————————————\n👉𝙏𝙞𝙚̂́𝙣 𝙝𝙖̀𝙣𝙝 𝙘𝙝𝙖̣𝙮 𝙫𝙤̂ 𝙘𝙖̂̀𝙪 𝙙𝙞 𝙞̉𝙖!!!",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}