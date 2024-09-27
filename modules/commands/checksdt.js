const axios = require('axios');

module.exports.config = {
  name: "checksdt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vdang",
  description: "Check giá trị của sim",
  commandCategory: "Tiện ích",
  usages: "checksdt [số điện thoại]",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  try {
    if (args.length === 0) {
      return api.sendMessage("Thiếu số điện thoại.", event.threadID, event.messageID);
    }

    const sdt = args.join(" ");
    const apiUrl = `https://api.sumiproject.net/valuation?sdt=${encodeURIComponent(sdt)}`;

    api.sendMessage("Đang kiểm tra giá trị số điện thoại...", event.threadID, async (error, info) => {
      if (error) {
        console.error("Error sending message:", error);
        return;
      }

      try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status === 'success') {
          const message = `🎓 Giá trị sim của số điện thoại ${sdt} là: ${data.content}`;
          api.sendMessage(message, event.threadID);
          api.setMessageReaction("✅", info.messageID);
        } else {
          api.sendMessage(`Không tìm thấy thông tin cho số điện thoại ${sdt}.`, event.threadID);
          api.setMessageReaction("❌", info.messageID);
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
        api.sendMessage("Đã xảy ra lỗi khi thực hiện kiểm tra số điện thoại.", event.threadID);
        api.setMessageReaction("❌", info.messageID);
      }
    });

  } catch (error) {
    console.error("Script error:", error);
    api.sendMessage("Đã xảy ra lỗi khi thực hiện lệnh.", event.threadID);
  }
};

