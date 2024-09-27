module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Vdang",
  description: "out box",
  commandCategory: "Hệ Thống",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage(`\n┏━━━━━━━━━━━━━━━━━━━━┓\n┣➤ :( bot phải out rồi❌ \n┣➤🟢 Pai pai mụi người ToT\n┣➤⏰ Hẹn ngày gặp lại huhuhu\n┗━━━━━━━━━━━━━━━━━━━━┛\n`, id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}