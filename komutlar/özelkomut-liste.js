const Discord = require("discord.js")
const db = require('croxydb')

exports.run = async(bot, message, args) => {
          let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) // If they didn't write none, set what they wrote as the message
                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                    // Fetch the new channel they mentione
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Mevcut özel komutlar.`, `\`${komut}\``)
                     .setColor('GREEN')
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['özelkomutlistesi','özelkomut-listesi','özel-komutlistesi'],
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-liste',
  description: 'eklediğiniz özel komutlara bakarsınız.',
  usage: 'özel-komut-liste'
};