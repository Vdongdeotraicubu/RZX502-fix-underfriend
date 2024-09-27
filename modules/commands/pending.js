module.exports.config = {
    name: "pending",
    version: "1.0.6",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 2,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "Hệ thống",
    usages: "[u] [t] [a]",
    cooldowns: 5
};


module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/trogiup/menu/`;
    if (!fs.existsSync(dirMaterial + "menu")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "trogiup.jpg")) request("https://i.imgur.com/I8XXFGZ.png").pipe(fs.createWriteStream(dirMaterial + "trogiup.png"));
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
  const moment = require("moment-timezone");
        var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY)  (dddd)");
          var time = process.uptime();
      var hours = Math.floor(time / (60 * 60));
	var minutes = Math.floor((time % (60 * 60)) / 60);
	var seconds = Math.floor(time % 60);
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} 𝙆𝙝𝙤̂𝙣𝙜 𝙥𝙝𝙖̉𝙞 𝙡𝙖̀ 𝙢𝙤̣̂𝙩 𝙘𝙤𝙣 𝙨𝙤̂́ 𝙝𝙤̛̣𝙥 𝙡𝙚̣̂`, threadID, messageID);
        }
        return api.sendMessage(`𝙏𝙪̛̀ 𝘾𝙝𝙤̂́𝙞 ✅`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} 𝙆𝙝𝙤̂𝙣𝙜 𝙥𝙝𝙖̉𝙞 𝙡𝙖̀ 𝙢𝙤̣̂𝙩 𝙘𝙤𝙣 𝙨𝙤̂́ 𝙝𝙤̛̣𝙥 𝙡𝙚̣̂`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`〖 ${global.config.PREFIX} 〗• ${(!global.config.BOTNAME) ? "ditmemay" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:` 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n━━━━━━━━━━━━━━━━━━━\n🌸 𝐄𝐲𝐨𝐨𝐨 𝐖𝐡𝐚𝐭 𝐒𝐡𝐮𝐩 𝐀 𝐍𝐨̛̀ 𝐋𝐨̂ 𝐀𝐧𝐡 𝐄𝐦, 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐎𝐓 𝐓𝐡𝐢𝐞̣̂𝐧 𝐒𝐢𝐞̂𝐮 𝐍𝐡𝐚̂𝐧, 𝐃𝐮̀𝐧𝐠 .𝐡𝐞𝐥𝐩 𝐚𝐥𝐥 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐀𝐥𝐥 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐞́ 𝐇𝐨𝐚̣̆𝐜 .𝐦𝐞𝐧𝐮 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐕𝐞̂̀ 𝐋𝐞̣̂𝐧𝐡 𝐂𝐮̉𝐚 𝐁𝐨𝐭 🌸\n𝘾𝙝𝙪́𝙘 𝘼𝙣𝙝 𝙀𝙢 𝙑𝙪𝙞 𝙑𝙚̉ 𝙏𝙧𝙤𝙣𝙜 𝙌𝙪𝙖́ 𝙏𝙧𝙞̀𝙣𝙝 𝘿𝙪̀𝙣𝙜 𝘽𝙤𝙩 𝙉𝙝𝙚́ 💟\n𝗯𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio}⌚\n━━━━━━━━━━━━━━━━━━━━\n𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆` , attachment: fs.createReadStream(__dirname + "/trogiup/menu/trogiup.png")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`𝙋𝙝𝙚̂ 𝘿𝙪𝙮𝙚̣̂𝙩 ✅`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
        if (args.join() == "") {api.sendMessage("𝘽𝙖̣𝙣 𝙘𝙤́ 𝙩𝙝𝙚̂̉ 𝙙𝙪̀𝙣𝙜 𝙥𝙚𝙣𝙙𝙞𝙣𝙜:\n𝙥𝙚𝙣𝙙𝙞𝙣𝙜 𝙪𝙨𝙚𝙧: 𝙃𝙖̀𝙣𝙜 𝙘𝙝𝙤̛̀ 𝙣𝙜𝙪̛𝙤̛̀𝙞 𝙙𝙪̀𝙣𝙜\n𝙥𝙚𝙣𝙙𝙞𝙣𝙜 𝙩𝙝𝙧𝙚𝙖𝙙: 𝙃𝙖̀𝙣𝙜 𝙘𝙝𝙤̛̀ 𝙣𝙝𝙤́𝙢\n𝙥𝙚𝙣𝙙𝙞𝙣𝙜 𝙖𝙡𝙡:𝙏𝙖̂́𝙩 𝙘𝙖̉ 𝙝𝙖̀𝙣𝙜 𝙘𝙝𝙤̛̀ ",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    const permission = ["100083244550129"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("𝙇𝙤̂̃𝙞 🚫", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`𝘿𝙖𝙣𝙝 𝙎𝙖́𝙘𝙝 𝘾𝙖̂̀𝙣 𝘿𝙪𝙮𝙚̣̂𝙩 : ${list.length} 𝙉𝙜𝙪̛𝙤̛̀𝙞 𝘿𝙪̀𝙣𝙜\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("𝙏𝙧𝙤̂́𝙣𝙜 🛡️", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
        const permission = ["100083244550129"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("𝙇𝙤̂̃𝙞 🚫", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`𝘿𝙖𝙣𝙝 𝙎𝙖́𝙘𝙝 𝘾𝙖̂̀𝙣 𝘿𝙪𝙮𝙚̣̂𝙩 : ${list.length} 𝙉𝙝𝙤́𝙢\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("𝙏𝙧𝙤̂́𝙣𝙜 🛡️", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
        const permission = ["100083244550129"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage(" 𝙇𝙤̂̃𝙞 🚫", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`𝘿𝙖𝙣𝙝 𝙎𝙖́𝙘𝙝 𝘾𝙖̂̀𝙣 𝘿𝙪𝙮𝙚̣̂𝙩 : ${list.length} 𝙐𝙨𝙚𝙧 & 𝙏𝙝𝙧𝙚𝙖𝙙\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("𝙏𝙧𝙤̂́𝙣𝙜 🛡️", threadID, messageID);
        }
    }       
  }
  