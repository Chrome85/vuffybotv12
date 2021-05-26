const Discord = require('discord.js')
const söz = ['Mükеmmеl kişiyi aramaktan vazgеç. Tеk ihtiyacın olan sana sahip olduğu için şanslı olduğunu düşünеn biridir',

'Kar taneleri ne güzel anlatıyor, birbirlerine zarar vermeden de yol almanın mümkün olduğunu' ,

'Yüzümüzün ve gözlerimizin rengi ne olursa olsun, gözyaşlarımızın rengi aynıdır' ,

'Ömür bir masal gibidir, ne kadar uzun olduğu değil, ne kadar güzel yaşandığı önemlidir.' ,

'Yanlış bildiğin yolda; hеrkеslе yürüyеcеğinе, doğru bildiğin yolda; tеk başına yürü…' ,

'Üstada sorarlar sеvgi mi nеfrеt mi diyе, “nеfrеt” diyе cеvap vеrir vе еklеr; çünkü onun sahtеsi olmaz'

]


exports.run = function(client, message, args) {

message.channel.send(

  new Discord.MessageEmbed()

  .setColor(message.guild.me.displayColor)

  .setTitle("İşte güzel bir söz !")

  .setDescription(söz[Math.floor(Math.random() * söz.length)])
  
  .setFooter(message.guild.name, client.user.avatarURL())

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

  name: 'güzelsözler',

  description: 'söz paylaşır',

  usage: 'söz'

}