module.exports.config = {
  name: "lồn",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Vdang",
  description: "tag toàn bộ thành viên",
  commandCategory: "Quản Lí Box",
  usages: "[Text]",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args}) {
  try {
    const botID = api.getCurrentUserID();
    const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
    var body = (args.length != 0) ? args.join(" ") : "Ae ơi box có thằng đồi trụy muốn xem lồn nè 😒🖕", mentions = [], index = 0;

    for(const idUser of listUserID) {

        body = "‎" + body;
        mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
        index -= 1;

    }

      return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

  }
  catch (e) { return console.log(e); }
}