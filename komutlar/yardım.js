const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Yardım Komutları')
.setTimestamp()
.addField(`:robot: ${ayarlar.prefix}moderasyon`, `Moderasyon komutlarını atar.`,true)
.addField(`:robot: ${ayarlar.prefix}eğlence`, `Eğlence komutlarını atar.`,true)



.setFooter('Vuffy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};