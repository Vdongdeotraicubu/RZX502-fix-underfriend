module.exports.config = {
    name: "work",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie", 
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "Tài chính",
    usages: "work",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 600000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "[😽]➜ Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "[😽]➜ You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
const { threadID, messageID, senderID } = event;
let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != event.senderID) return api.sendMessage("HELLO", event.threadID, event.messageID)
//random coins nhận được khi làm việc ít nhất 100000
var coinscn = Math.floor(Math.random() * 80000) + 100000; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 95000) + 100000; //random coins khi làm ở kvi` ; Currencies.increaseMoney(event.senderID, coinscn); break;             
                case "2": msg = `[😽]➜ Bạn đang làm việc ${work2} ở khu dịch vụ và kiếm được ${coinsdv}$`; Currencies.increaseMoney(event.senderID, coinsdv); break;
                case "3": msg = `[😽]➜ Bạn ${work3} tại khu mở dầu và bán được ${coinsmd}$`; Currencies.increaseMoney(event.senderID, coinsmd); break;
                case "4": msg = `[😽]➜ Bạn đang khai thác ${work4} và kiếm được ${coinsq}$`; Currencies.increaseMoney(event.senderID, coinsq); break;
                case "5": msg = `[😽]➜ Bạn đào được ${work5} và kiếm được ${coinsdd}$` ; Currencies.increaseMoney(event.senderID, coinsdd); break;
                case "6": msg = `[😽]➜ Bạn đã hoàn thành việc chăm sóc con ${work6} và được chủ trả lương tổng là ${coinscsdv}$`; Currencies.increaseMoney(event.senderID, coinscsdv); break;
                case "7": msg = "[😽]➜ Chưa update..."; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("[😽]➜  Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("[😽]➜  Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "➜ Chưa update...") {
                msg = "➜ Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("=== Xâm nhập bí cảnh ===" +
                "\n\n1. Khu công nghiệp." +
                "\n2. Khu dịch vụ." +
                "\n3. Khu mỏ dầu." +
                "\n4. Khai thác quặng." +
                "\n5. Đào đá" +
                "\n6. Chăm sóc động vật" +
                "\n7. Update soon..." +
                "\n\n[😽]➜  Hãy reply tin nhắn và chọn theo số" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}