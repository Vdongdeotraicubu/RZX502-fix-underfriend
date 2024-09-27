const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "ngủ",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vdang",
  description: "ngáy khò khò",
  commandCategory: "Hành Động",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
    "https://i.imgur.com/gTPetgg.mp4",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + `ngủ đi thằng ông cố 🎀`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/ngủ.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ngủ.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ngủ.mp4")).on("close",() => callback());
   }