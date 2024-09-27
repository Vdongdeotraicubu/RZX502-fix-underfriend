module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "CatalizCS mod by vdang",
  description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
  const { threadID } = event;
  const moment = require("moment-timezone");//D/MM/YYYY
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  const hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`『 ${global.config.PREFIX} 』 ⪼ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(`🔰𝙆𝙚̂́𝙩 𝙣𝙤̂́𝙞 𝙩𝙝𝙖̀𝙣𝙝 𝙘𝙤̂𝙣𝙜 𝙫𝙤̛́𝙞 𝙝𝙚̣̂ 𝙩𝙝𝙤̂́𝙣𝙜 𝙧𝙤𝙗𝙤𝙩 𝙘𝙪̉𝙖 Nguyễn lê.\n📝𝙃𝙖̃𝙮 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 ${global.config.PREFIX}menu all 𝙙𝙚̂̉ 𝙭𝙚𝙢 𝙩𝙤𝙖̀𝙣 𝙗𝙤̣̂ 𝙡𝙚̣̂𝙣𝙝 𝙘𝙪̉𝙖 𝙗𝙤𝙩\n⛔𝙑𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙠𝙝𝙤̂𝙣𝙜 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩 𝙙𝙚̂̉ 𝙩𝙧𝙖́𝙣𝙝 𝙗𝙤𝙩 𝙗𝙞̣ 𝙙𝙞𝙚 𝙣𝙝𝙚́!!`, threadID);
  }
  else {
    tnude
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinPNG");
      const pathGif = join(path, `${threadID}.mp4`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "=========[ Welcome ]========\n Xin chào bạn {name}.\n😻 Chào mừng đã đến với {threadName}.\n✅ Bạn là thành viên thứ {soThanhVien} của nhóm\n📌Bạn hãy tương tác đầy đủ nếu không muốn cút!": msg = threadData.customJoin;
      msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? '𝗖𝗮́𝗰 𝗰𝗮̣̂𝘂' : '𝗰𝗮̣̂𝘂')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "𝗦𝗮́𝗻𝗴" : 
    hours > 10 && hours <= 12 ? "𝗧𝗿𝘂̛𝗮 " :
    hours > 12 && hours <= 18 ? "𝗖𝗵𝗶𝗲̂̀𝘂 " : "𝗧𝗼̂́𝗶")
                .replace(/\{time}/g, time);  



      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);

    } catch (e) { return console.log(e) };
  }
                       }
