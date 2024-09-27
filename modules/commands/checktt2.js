module .exports .config = {
    name: "checktt2",
    version: "1.6.0",
    hasPermssion: 0,
    credits: "",
    description: "Kiểm tra lượt tương tác trong nhóm",
    commandCategory: "Thống kê",
    usages: "[all/tag]",
    cooldowns: 5
};

module.exports.languages = {
    "vi": { "all": "[%1]→ %2 đang xếp hạng với tổng số tin nhắn là: %3\n",
    },
    "en": { "all": "%1/ %2 with %3 messages\n",
    }
}
module .exports .run = async function ({ args,Users,Threads, api, event, Currencies, getText }) {
var mention = Object.keys(event.mentions);
const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
const res = await axios.get("https://apimyjrt.jrtxtracy.repl.co/hololive.php");
const data = res.data.data;
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
if (args[0] == "all") {
            var { participantIDs, adminIDs } =(await Threads.getData(event.threadID)).threadInfo;   
            const listUserID = event.participantIDs
            var id = listUserID 
            var number = 1, msg = "", storage = [], exp = [];
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : (typeof ((await Users.getData(idUser)).name) == "undefined") ? 0 : (await Users.getData(idUser)).name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
                const fs = require('fs')
                var p = __dirname + '/noprefix/timeJoin.json'
module.exports.handleEvent = async function ({ event: e }) {
    const { threadID: t, senderID: u, body } = e,
{ readFileSync: r, writeFileSync: w } = fs,
{ parse: o, stringify: s } = JSON
var get = require('moment-timezone').tz('Asia/Ho_Chi_Minh'),
     gio = get.format('HH:mm:ss'),
        ngay = get.format('YYYY-MM-D'),
    burh = get.format('D/MM/YYYY')
    let a = o(r(p))
    if (!a[u + t]) {
     a[u + t] = {
 uid: u,
        gio: gio,
        ngay: ngay,
        burh: burh,
    }
 w(p, s(a))
    }
}
    module.exports.run = async function ({
    api: a,
    event: e,
    args: g,
    Users: u,
    Threads: d,
    }) {
const { threadID: t, messageID: m, senderID: s } = e,
{ sendMessage: n } = a,
c = this.config.credits,
{ readFileSync: f, existsSync: x, writeFileSync: w } = fs,
{ parse: o, stringify: r } = JSON
if ('Vdang' != c) {
        return
        }
    if (!x(p)) {
    w(p, r({}))
     }
  let i = await a.getThreadInfo(t),
    tN = i.threadName,
L = o(f(p)),
     timeN = L[s + t].ngay,
         timeG = L[s + t].gio
var gn1 = new Date(`${timeN} ${timeG}`),
gn2 = new Date(),
gn3 = gn1.getTime(),
gn4 = gn2.getTime(),
get_Tuan = Math.ceil((gn4 - gn3) / 604800000) - 1,
get_Thang = Math.ceil((gn4 - gn3) / 2678400000) - 1,
get_Gio = Math.ceil((gn4 - gn3) / 3600000),
get_Phut = Math.ceil((gn4 - gn3) / 60000),
get_Giay = Math.ceil((gn4 - gn3) / 1000)
if (get_Ngay == 0) {
return n(`Chỉ bắt đầu tính sau 1 ngày khi bot vào nhóm`, t, m)
        }
           
            exp.sort(function (a, b) { return b.exp - a.exp });
            for (const lastData of exp)  msg += getText("all", number++, lastData.name, lastData.exp);

            return api.sendMessage({ body: `=== Check tương tác all ===\n◆━━━━━━━━━━◆\n\n` + msg + `\n\n━━━━━━━━━━━━━━━\n=== 『 𝐁𝐎𝐓 』 ===n\n===「${thu} || ${gio}」===`, attachment: download }, event.threadID, event.messageID);

}
    else 
    if(event.type == "message_reply") { mention[0] = event.messageReply.senderID }
    if (mention[0]) {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            const listUserID = event.participantIDs
            var id = listUserID 
            exp = [];
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            return api.sendMessage({ body: `=== 『 𝐁𝐎𝐓 』 ===\n\n${(await Users.getData(mention[0])).name} đang đứng hạng ${rank} với tổng số tin nhắn là: ${infoUser.exp}\n\n━━━━━━━━━━━━━━━\n=== 『 𝐁𝐎𝐓 』 ===\n\n===「${thu} || ${gio}」===\nSố ngày ở box ${get_Ngay}\nSố tuần ở box ${get_Tuan}\n Số giờ ở box ${get_Gio}\n Số phút ở box ${get_Phut}\nSố giây ở box ${get_Giay}`,attachment: download }, event.threadID, event.messageID);
}
else {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            const listUserID = event.participantIDs
            var id = listUserID 
            exp = [];
            var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
          
            return api.sendMessage({ body: `=== 『 𝐁𝐎𝐓 』 ===\n\nBạn đang đứng hạng ${rank} với tổng số tin nhắn là: ${infoUser.exp}\n\n━━━━━━━━━━━━━━━\n=== 『 𝐁𝐎𝐓 』 ===\n\n===「${thu} || ${gio}」===`,attachment: download }, event.threadID, event.messageID);
}
}