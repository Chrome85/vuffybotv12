const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {

   message.channel.send('laf yükleniyor.').then(message => {
      var espriler = ['Senin gittiğin yoldan biz geri dönüyorduk aslanım','Sana bi laf sokmak lazım yan etkisi yokmuş','sеnin zirvеn bеnim zеminim!','güzel gözler yetmiyor birazda akıl lazım','seni şifrem yapayım dedim,yetersiz karakter dedi','karakterin yere düşmüş,al onu yerden'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['laf', 'laf-sok', 'sok-laf', 'lafsok'],
  permLevel: 0
};

exports.help = {
  name: 'lafsok',
  description: 'Sokucu Laflar Söyler.',
  usage: 'lafsok'
};