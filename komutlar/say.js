const Discord = require('discord.js');

    module.exports.run = async (client, message, args) => {
        if (![`769241220110352416`].includes(message.author.id)) {
          return message.delete({ timeout: 100 });
        }
 
    const say = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("👥 Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("🤖 Sunucudaki Bot Sayısı", message.guild.members.cache.filter(m => m.user.bot).size)
        .addField("🌐 Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "offline").size)
        .addField("💤 Çevrimdışı üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "offline").size)

    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'gelişmiş-say',
    description: 'Say',
 }