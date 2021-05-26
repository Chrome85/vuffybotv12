const Discord = require('discord.js');
	exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	
    let member = args[0];
	if (isNaN(member)) return message.reply('Doğru ID girmelisiniz.');

	const sebep = args.splice(1, args.length).join(' ') || `Sebep belirtilmemiş.`;

	message.guild.members.ban(member, sebep+" | Yetkili: "+message.author.tag).then(() => {
		message.channel.send(`\`${member}\`, Sebep: ${sebep}`);
		    
  })
			.catch((err) => {
				console.log(err);
			});
	

};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 2
};

exports.help = {
	name: 'forceban',
	category: '',
	description: 'id ile ban atarsınız',
	usage: 'forceban '
};