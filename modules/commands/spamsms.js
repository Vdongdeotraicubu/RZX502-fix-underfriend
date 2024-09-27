import axios from "axios";

module.exports.config = {
  name: "spamsms",
  version: "1.0.0",
  credits: "Vdang",
  description: "",
  permissions: [2],
  cooldown: 5
}

async function onCall({ message, args, data }) {
  const user = data.user
  const input = args.join(" ").split(" ")
  const sdt = input[0],
    luot = input[1],
    delay = input[2]

  if (!sdt || !luot || !delay) return message.reply("Thiếu dữ liệu, vui lòng nhập lại!");

  axios.get(encodeURI(`https://spam.dungkon.me/spam?sdt=${sdt}&luot=${solan}&delay=${delay}&apikey=dungkon`));

  return message.send(`Đang tiến hành spam\n\nSố điện thoại: ${sdt}\n\nSố lần: ${luot}\n\nTime delay: ${delay}\n\nNgười thực thi lệnh: ${user.info.name}`)
}

export {
  config,
  onCall
}