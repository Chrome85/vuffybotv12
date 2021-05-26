const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const db = require('croxydb')

exports.run = async (client, message, args) => {
  
        if (message.author.id !== ayarlar.sahip) return  message.channel.send('Bu Komutu Kullanmak İçin **`Sahibim`** Olman Lazım!')
  try {
    let codein = args.join(" ");
    let code = eval(codein)
    if (codein.length < 1) return message.channel.send('Bir kod girmelisin !')
    if (codein == 'client.token') return message.channel.send('Tokenim yok benim.')
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
    let embed = new Discord.MessageEmbed()
    .setColor(message.guild.me.displayColor)
    .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
    .addField('Sonuç', `\`\`\`js\n${code}\n\`\`\``)
    message.channel.send(embed)
  } catch(e) {
    let embed2 = new Discord.MessageEmbed()
    .setColor(message.guild.me.displayColor)
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
    message.delete(7500)

  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'eval <kod>'
  }