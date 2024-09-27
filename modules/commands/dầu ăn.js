const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "dầu ăn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vdang",
  description: "ngỏ lời",
  commandCategory: "Hành Động",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://www.facebook.com/messenger_media/?attachment_id=1279529460097443&message_id=mid.%24gABsBwWfRPrqXjZI8gGRXEztcklLm&thread_id=7601754553269946",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body: `Tặng chai dầu ăn nè, mình làm tí nha ${tag} 👉👈`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/dầu ăn.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/dầu ăn.png"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/dầu ăn.png")).on("close",() => callback());
   }