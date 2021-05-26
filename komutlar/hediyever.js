const Discord = require('discord.js');

exports.run = (client, message, params) => {

const nhediyeci = message.mentions.users.first() 
if (!nhediyeci) return message.channel.send("Kime Hediye Alıyoruz?")

 

      const narcoshediye = new Discord.MessageEmbed()
    .setDescription(`${nhediyeci} Sana Hediye Alan Biri Var Aramızda 😊`)
    .setColor("RANDOM")
    .setTimestamp()
    .setImage("https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif")
    message.channel.send(narcoshediye)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hediye","h-v","hv"],
  permLevel: 0
};

exports.help = {
  name: 'hediye-ver',
  description: 'Hediye Alırsınız',
  usage: 'hediye-ver'
};