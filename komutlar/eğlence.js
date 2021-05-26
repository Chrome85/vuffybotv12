const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Eğlence Komutları')
.setTimestamp()
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}hediye-ver`, `hediye verirsin`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}ilginçbilgi`, `İlginç bilgi verir`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}kahve`, `Kahve içersin`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}kartopu`, `Karopu Atarsın`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}oylama`, `Oylama Yaparsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}espri`, `Espri Yaparsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}mcskin`, `Yazdığınız kişinin Minecrafttaki Skinine bakarsınız.`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}yazankazanır`, `Etiketlediğiniz kişiyle "Yazan Kazanır" oynarsınız.`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}adamasmaca`, `Adam Asmaca oynarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}emojiekle`, `Emoji Ekler`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}golat`, ` Gol atarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}say`, `Sunucu bilgisi`)
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};