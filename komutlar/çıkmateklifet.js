const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send('❌ **Çıkma Teklif Edeceğin Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!❤️❤️')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim😆', `Bu Arada Botu eklemeyi Unutma!`)
    .addField('Teklif Eden Kişi :', `➽ <@${message.author.id}>`)
    .setFooter('Çıkma Teklifi |CodeLib')
    dmkisi.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin ✅')
    .setFooter('Çıkma Teklifi!')
    message.channel.send(dmtamam);
    
        message.channel.send('✅ **Teklif Gönderildi! Bol Şans!😉**');
    };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet"],
  permLevel: 0
};

exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'etiketlediğiniz kişiyiye çıkma teklifi edersiniz.',
  usage: 'çıkma-teklifi-et'
};