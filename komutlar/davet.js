const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription("**Bot yapımıcılari:** <@769241220110352416>")
  .setColor("RANDOM")
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Davet Et] (https://discord.com/oauth2/authorize?client_id=792000200389558313&scope=bot&permissions=0)`, false)
  ;

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};