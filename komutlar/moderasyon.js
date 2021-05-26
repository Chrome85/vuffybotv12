const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Moderasyon Komutları')
.setTimestamp()
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}ban`, `Ban atarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}byetkilirol`, `Ban yetkilirol ayarlar`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}banlog`, `Banlog ayarlar`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}bansor`, `Ban sebebini sorgularsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}sa-as`, `Sa-as sistemi Sistemi`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}rol-ver`, `Kullanıcıya belirtilen rolü verir`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}rol-al`, `Kullanıcıdan belirtilen olü alır`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}modlog`, `Modlog sistemi`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}reklamengel`, `Reklam Engel ayarlar`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}afk`, `Afk Sistemi`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}userinfo`, `Kullanıcı Bilgi`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}kick`, `Kick Atarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}kicklog`, `Kick Logunu Ayarlarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}kyetkilirol`, `Kick yetkilirol ayarlar`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}kilitle`, `Kanalı kilitler, kimse mesaj yazamaz (Yetkisi olanlar dışında)`)
.setFooter('Vuffy', client.user.avatarURL())
.setTimestamp() 
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['mod'], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};