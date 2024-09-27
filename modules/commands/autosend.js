module.exports.config = {
  name: 'autosend',
  version: '10.02',
  hasPermssion: 0,
  credits: 'DC-Nam',
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'admin',
  usages: '[]',
  cooldowns: 3
};
const nam = [{
  timer: '10:00:00 PM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 22 giờ 00 phút« «\n\n Ngủ lẹ đi mấy thằng lồn❤️\n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
},
{   
  timer: '1.00.00 AM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 1 giờ 00 phút« «\n\n Đi ngủ đi mấy thằng lồn ơi thủ dâm đéo gì giờ này\n\n» » Đây là tin nhắn tự động « «\n\nฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠_____________________']
},
{
  timer: '2:00:00 PM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 14 giờ 00 phút« «\n\n 2 giờ rồi ngủ con cặc j nữa\n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
},
{
  timer: '6:00:00 AM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 06 giờ 00 phút« «\n\n Dậy đi ngủ con cặc j ngủ như heo v\n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
},
{
  timer: '12:00:00 PM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 12 giờ 00 phút« «\n\n Đi ngủ đi mấy thằng lồn tí có sức đi làm \n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
},           
    {
  timer: '10:00:00 AM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 10 giờ 00 phút« «\n\n Bật nút nồi cơm đi bị mẹ đánh bố mày đéo cản\n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
},               
    {
  timer: '5:00:00 PM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 17 giờ 00 phút« «\n\n Bật nút nồi cơm hộ bố mày đi mấy thằng lồn\n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
},
    {
  timer: '6:00:00 PM',
  message: ['_______[🅻🆃🅽]_______\n\n» »Bây giờ là: 18 giờ 00 phút« «\n\n Ăn uống tắm rửa ỉa đái lẹ rồi làm ván game nào mấy nhóc \n\n» » Đây là tin nhắn tự động « «\n\n_____________________']
}];
module.exports.onLoad = o => setInterval(() => {
  const r = a => a[Math.floor(Math.random()*a.length)];
  if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};