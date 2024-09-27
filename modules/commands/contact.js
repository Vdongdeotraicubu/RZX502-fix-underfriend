module.exports.config = {
  name: "contact",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Vdang",
  description: "share contact của admin",
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    return api.shareContact('𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙘𝙪̉𝙖 𝘼𝙙𝙢𝙞𝙣 đ𝙖̂𝙮',global.config.NDH[0], event.threadID);
}