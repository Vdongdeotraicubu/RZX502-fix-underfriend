const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod",
  description: "Imgur",
  commandCategory: "Tiện Ích",
  usePrefix: false,
  usages: "[reply]",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;
  const ClientID = "c76eb7edd1459f3";

  // Kiểm tra nếu không phải reply hoặc không có attachment
  if (type !== "message_reply" || !messageReply.attachments || messageReply.attachments.length === 0) {
    console.log("Không phải reply hoặc không có tệp đính kèm.");
    return api.sendMessage("Bạn phải reply một video, ảnh nào đó", threadID, messageID);
  }

  console.log("Bắt đầu tải các tệp đính kèm về...");
  imgur.setClientId(ClientID);
  const attachmentSend = [];

  // Tải các tệp đính kèm về
  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext = data.type === "photo" ? "jpg" :
                  data.type === "video" ? "mp4" :
                  data.type === "audio" ? "m4a" :
                  data.type === "animated_image" ? "gif" : "txt";
      const pathSave = `${__dirname}/cache/${startFile}.${ext}`;
      startFile++;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
      console.log(`Đã tải xuống: ${pathSave}`);
    }
  }

  try {
    await getAttachments(messageReply.attachments);

    let msg = "", success = 0, error = [];

    console.log("Bắt đầu upload các tệp lên Imgur...");
    // Upload các tệp lên Imgur
    for (const getImage of attachmentSend) {
      try {
        const getLink = await imgur.uploadFile(getImage);
        console.log(`Đã upload: ${getLink.link}`);
        msg += `"${getLink.link}",\n`;
        fs.unlinkSync(getImage); // Xóa tệp sau khi upload
      } catch (err) {
        console.error(`Lỗi khi upload ${getImage}:`, err);
        error.push(getImage);
        fs.unlinkSync(getImage); // Xóa tệp nếu có lỗi
      }
    }

    console.log("Đã hoàn tất upload. Gửi tin nhắn...");
    // Gửi tin nhắn với các link đã upload
    return api.sendMessage(`${msg}`, threadID, messageID);
  } catch (err) {
    console.error('Lỗi khi xử lý các tệp đính kèm:', err);
    return api.sendMessage('Đã xảy ra lỗi khi xử lý các tệp đính kèm.', threadID, messageID);
  }
};