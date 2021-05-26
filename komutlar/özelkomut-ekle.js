const db = require('croxydb')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
{
{
        					let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "/";
                let mentionEmbed = new Discord.MessageEmbed()
                     .setDescription(`Lütfen \`komut\` - \`gönderilecek şey\` olarak kullanınız.\nÖrnek: \`\`\`${ayarlar.prefix}özelkomutekle minecraft-ip play.serveripniz.com\`\`\``)
                     .setColor('RED')
                    // Return Statements
               var user = message.mentions.users.first() || message.author;
      let owner = await db.fetch(`${user.id}`);
if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== `${owner}`) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisi Lazım!').setColor("RED"));
  // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args[0]) return message.channel.send(mentionEmbed)
                     if (!args[1]) return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let komut;
                     if (!args[0]) komut = ''; // If they wrote the word none, it sets newMessage as empty.
                     else komut = (args[0]); // If they didn't write none, set what they wrote as the message
 if(args[0] == 'yardım' || args[0] == 'bilgi' || args[0] == 'istatistik' || args[0] == 'davet' || args[0] == 'ping' || args[0] == 'yardım' || args[0] == 'ayarlar' || args[0] == 'hava-durumu' || args[0] == 'kitap-ara' || args[0] == 'sunucu-bilgi' || args[0] == 'kullanıcı-bilgi' || args[0] == 'tavsiye' || args[0] == 'rolbilgi' || args[0] == 'talep' || args[0] == 'döviz' || args[0] == 'atatürk' || args[0] == 'espri' || args[0] == 'emoji-yazı' || args[0] == 'wasted' || args[0] == 'roller' || args[0] == 'fucked' || args[0] == 'kimlik' || args[0] == 'yaş' || args[0] == 'isim' || args[0] == 'cinsiyet' || args[0] == 'biyografi' || args[0] == 'instagram' || args[0] == 'rocket-league' || args[0] == 'steam-oyun' || args[0] == 'mcskin' || args[0] == 'mckafa' || args[0] == 'mcsunucu' || args[0] == 'prefix-ayarla' || args[0] == 'prefix-sıfırla' || args[0] == 'oto-rol-ayarla' || args[0] == 'gçs-ayarla' || args[0] == 'kayıtlar-ayarla' || args[0] == 'yasakla' || args[0] == 'at' || args[0] == 'uyar' || args[0] == 'rolver' || args[0] == 'rolal' || args[0] == 'yaz' || args[0] == 'duyuru' || args[0] == 'sil' || args[0] == 'giriş' || args[0] == 'dm-ayarla' || args[0] == 'çıkış' || args[0] == 'eval' || args[0] == 'yenile' || args[0] == 'özel-komut-ekle' || args[0] == 'özel-komut-sil' || args[0] == 'özel-komut-listesi') return message.channel.send('Botun varolan bir komudunu ekleyemezsin.')                   
  let gonderileceksey;
                     if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; // If they wrote the word none, it sets newMessage as empty.
                     else gonderileceksey = args.slice(1, 1000, args[1]).join(' '); // If they didn't write none, set what they wrote as the message
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Bu sunucuya özel komut eklendi.`, `\`${komut}\` yazıldığı zaman \`${gonderileceksey}\` olarak yanıt verecek.`)
                     .setColor('GREEN')
                     db.set(`sunucuKomut_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     };



}
      
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-ekle', 
  description: "özel komut eklersiniz.",
  usage: 'özel-komut-ekle'
};