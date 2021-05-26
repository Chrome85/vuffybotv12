const Discord = require("discord.js")
const db = require('croxydb')

exports.run = async(bot, message, args) => {
					let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "/";
                    // Return Statements
         var user = message.mentions.users.first() || message.author;
      let owner = await db.fetch(`${user.id}`);
if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== `${owner}`) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisi Lazım!').setColor("RED")); // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                
                    // Fetch the new channel they mentione
                   let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) // If they didn't write none, set what they wrote as the message
                	 let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                	 if(!komut) return message.channel.send('Bu sunucuda özel komut ayarlı değil.')
                	 	let komutvarmi = await db.fetch(`sunucuKomut_${message.guild.id}`)
                	if(!args[0]) return message.channel.send(`Lütfen silmek istediğiniz özel komudu giriniz.\nMevcut özel komutlar: \`${komut}\``)
                	if(args[0] !== komut) return message.channel.send(`Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                   if(args[0] == 'Bulunmuyor.') return message.channel.send(`Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Bu sunucudan özel komut silindi.`, `\`${komut}\` silindi.`)
                     .setColor('GREEN')
                
                     db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                     db.delete(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['özelkomutsil','özelkomut-sil','özel-komutsil'],
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-sil',
  description: 'eklediğiniz özel komutu silersiniz.',
  usage: 'özel-komut-sil'
};