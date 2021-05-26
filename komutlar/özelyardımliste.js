const Discord = require('discord.js');
const db = require('croxydb')


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Özel Komut')
.setTimestamp()
.addField(`${prefix}özel-komut-ekle','özel komut eklersiniz. örnek: kullanıcı: sa bot: as`)
.addField(`${prefix}özel-komut-sil','eklediğiniz özel komutu silersiniz.`)
.addField(`${prefix}özel-komut-liste','eklediğiniz özel komutlara bakarsınız.`)

.setFooter('Vuffy')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'özelkomutyardım',
  description: 'Özelkomutkomutlarını gösterir.',
  usage: 'özelkomutyardım'
};