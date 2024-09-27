module.exports.config = {
  name: "contact user",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vdang",
  description: "share contact của thành viên",
  commandCategory: "Công cụ",
  usages: "tự đi mà mò",
  cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  let uid;

  if (!args[0]) {
      uid = event.senderID;
  } else {
      if (args[0].startsWith('https://')) {
          const link = args[0];
          try {
              const response = await axios.get(`https://api.zeidbot.site/timuid?link=${encodeURIComponent(link)}`);
              uid = response.data.id;
          } catch (error) {
              return api.sendMessage('Không thể lấy được UID từ liên kết.', threadID, messageID);
          }
      } else {
          uid = args[0];
      }
  }

    else if (type === "message_reply") {
          id = messageReply.senderID;
      } 
      else {
          id = senderID;
          customMessage = body.split("@")[0].trim();
      }
     return api.shareContact(`${uid}`, event.threadID)