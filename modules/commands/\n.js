module.exports.config = {
  name: '\n',
  version: '1.0.1',
  hasPermission: 2,
  credits: 'DongDev mod by Vdang',
  description: 'sai lệnh',
  commandCategory: 'Hệ Thống',
  usages: '[]',
  cooldowns: 5,
  images: [],
 };

 const fs = require('fs');
 const path = require('path');
 const axios = require('axios');
 const moment = require('moment-timezone');
 const os = require('os');

 function getDependencyCount() {
  try {
  const packageJsonString = fs.readFileSync('package.json', 'utf8');
  const packageJson = JSON.parse(packageJsonString);
  const depCount = Object.keys(packageJson.dependencies || {}).length;
  const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
  return { depCount, devDepCount };
  } catch (error) {
  console.error('Không thể đọc file package.json:', error);
  return { depCount: -1, devDepCount: -1 };
  }
 }

 function getStatusByPing(ping) {
  if (ping < 200) {
  return 'tốt';
  } else if (ping < 800) {
  return 'bình thường';
  } else {
  return 'xấu';
  }
 }

 module.exports.run = async function ({ api, event, Threads, Users }) {
  const { threadID: tid, messageID: mid } = event;
  const holidayDate = '10/02/2024';
  const timezone = 'Asia/Ho_Chi_Minh';
  const currentDate = moment().tz(timezone);
  const holiday = moment.tz(holidayDate, 'DD/MM/YYYY', timezone);
  const duration = moment.duration(holiday.diff(currentDate));
  const daysRemaining = Math.floor(duration.asDays());
  const hoursRemaining = duration.hours();
  const minutesRemaining = duration.minutes();
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");

  const { depCount, devDepCount } = await getDependencyCount();

  const botStatus = getStatusByPing(timeStart = Date.now());

  const uptime = process.uptime() + global.config.UPTIME;
  const uptimeHours = Math.floor(uptime / (60 * 60));
  const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
  const uptimeSeconds = Math.floor(uptime % 60);
  const uptimeString = `${uptimeHours.toString().padStart(2, '0')}:${uptimeMinutes.toString().padStart(2, '0')}:${uptimeSeconds.toString().padStart(2, '0')}`;

  let name = await Users.getNameUser(event.senderID);

  api.shareContact(` =====    [《 𝙑𝙙𝙖𝙣𝙜 》]   ===== \n──────────────────\n[⚠️] Chưa Nhập Tên Lệnh\n[📝] →⁠ PREFIX: ${global.config.PREFIX}\n[⚙️] →⁠ Ping: ${Date.now() - timeStart}ms\n[👤] →⁠ Yêu cầu bởi: ${name}\n──────────────────\n[⏰] →⁠ Time: ${gio}\n[⏳] →⁠ Bot đã online: ${uptimeString}`, global.config.NDH[0], event.threadID);
 };