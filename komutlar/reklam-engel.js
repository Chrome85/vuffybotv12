const db = require('croxydb');
        const Discord = require("discord.js") 

exports.run = (client, message) => {

  
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor('#f6ff00')
.setDescription(`<a:siren:778777832976416778> **HATA** <a:siren:778777832976416778> - Bu sunucuda yetkili değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      db.delete(`reklam.${message.guild.id}`)
      message.channel.send(`<a:siren:778777832976416778> **Başarılı ile reklam engel kapandı.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`reklam.${message.guild.id}.durum`,true)
      message.channel.send(`<a:tmdir:778774341357797378> **Başarılı ile reklam engel açıldı.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel"],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: 'Spallers',
  usage: 'Spallers'
}