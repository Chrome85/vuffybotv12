const Discord = require('discord.js')
const yazıtura = ['**Yazı**','**Tura**'] 


exports.run = function(client, message, args) {

message.channel.send(

  new Discord.MessageEmbed()

  .setColor(message.guild.me.displayColor)

  .setTitle("Bak Bakalım Ne Çıkmış ⬇️")

  .setDescription(yazıtura[Math.floor(Math.random() * yazıtura.length)])
  .setTimestamp()

  )

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'yazıtura',

  description: 'Yazı tura oynarsınız',

  usage: 'yazıtura'

}