const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setFooter('Vuffy', bot.user.avatarURL())
  .addField("» :spy: Botun Sahibleri", "<@769241220110352416> ")
  .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2)) 
  .addField("» Çalışma süresi", seksizaman)
  .addField("» Kullanıcılar", bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» :clipboard: Sunucular", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField(`» Node.JS sürüm`, `${process.version}`, true)
  .addField("» Ping", bot.ws.ping+" ms", true)
  .addField(':book: Kütüphanesi;', `Discord.js`)
  .addField("**❯ Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=792000200389558313&scope=bot&permissions=0)", )

  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "Bot Bilgileri",
  usage: "botbilgi"
};