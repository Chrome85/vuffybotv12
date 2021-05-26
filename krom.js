const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

const db = require('croxydb')
client.queue = new Map()
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};







client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

////-----------------------KOMUTLAR-------------------------------////


  //////ETIKETLENINCE PREFIX////
  
  client.on("message", msg => {
    //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    const westrabumbe = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Prefixim: ${prefix}\n Yardım için: ${prefix}yardım`)
    if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
      msg.channel.send(westrabumbe);
    }
  });
  
  ////////ETIKETLNINCE PREFIX///////  
  
//----------------------------LİNK ENGEL ----------------------------------------------------||

client.on("message", async  msg => {
  var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
     if (mayfe == 'acik') {
         const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
         if (birisireklammidedi.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                     return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
     
 
   msg.delete(3000);                              
 
             }              
           } catch(err) {
             console.log(err);
           }
         }
     }
     else if (mayfe == 'kapali') {
       
     }
     if (!mayfe) return;
   })
   ;
 
 //----------------------------LİNK ENGEL SON----------------------------------------------------||
 client.on("message", async msg => {
  if (msg.content === `<@774765565466116126>`){///BOT İD NİZİ GİRİNİZ
    return msg.channel.send( new Discord.MessageEmbedİ()
     .setTitle("Merhaba Ben Cowboy")
     .setDescription("Prefixim: `.`\n Komutlarıma bakmak için: `.yardım yazabilirsin :)`"))
                            }});
////son


//capsengel a.
client.on("message", async message => { 
  var anahtar = db.fetch(`caps_${message.guild.id}`)
  if(anahtar === "acik"){
    if(message.author.bot) return;
    if(message.content.length < 5) return;
    let capsengel = message.content.toUpperCase();
    let beyazliste =
      message.mentions.users.first() ||
      message.mentions.channels.first() ||
      message.mentions.roles.first()
      
   if(message.content == capsengel){
    if(!beyazliste && !message.content.includes("@everyone") && !message.content.includes("@here") && !message.member.hasPermission("BAN_MEMBERS"))
      {
        message.delete().then(message.channel.send("Büyük harf kullanmamalısın.!!!").then(i => i.delete(10000)))
      
      }}
      

    
    
  }
  if(!anahtar) return;
})
//capsengel son


//-------------------- Sa As Sistemi --------------------//

client.on("message", async message => {
  const Bdgo = message.content.toLocaleLowerCase();

  if (
    Bdgo === "selam" ||
    Bdgo === "sa" ||
    Bdgo === "selamün aleyküm" ||
    Bdgo === "selamun aleyküm" ||
    Bdgo === "slm" ||
    Bdgo === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const embed = new Discord.MessageEmbed()
      
     .setDescription(`Aleyküm Selam, Hoş Geldin ^-^`)
     .setColor("GREEN")
      
    return message.channel.send()
    }
  }
});



//-----------------------Reklam Engel Son-----------------------\\

//kanalkoruma
client.on('channelDelete', async channel => {
  var logk= await db.fetch(`kanalklog_${channel.guild.id}`)
if(logk){ 
  let kategori = channel.parentID;
  channel.clone(channel.name).then(channels => {
  let newkanal = channel.guild.channels.cache.find("name", channel.name)
  channels.setParent(channel.guild.channels.cache.find(channelss => channelss.id === kategori));
  client.channels.cache.get(logk).send(`${channel.name} adlı kanal silindi yeniden açıp izinlerini ayarladım.`);                     
});
}else return;
});
//kanalkoruma son

/////////////////////// OTOROL /////////////////////////
client.on('guildMemberAdd', member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`) 
  if(!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`) 
  if(!kanal) return;

member.roles.add(member.guild.roles.cache.get(rol))
  let embed = new Discord.MessageEmbed()
  .setThumbnail(member.user.displayAvatarURL({dynamic:true}))     
  .setDescription('> <:onaytiki:813053491445760000>  **<@' + member.user.id+  '>** **Adlı Kullanıcı Aramıza Katıldı** \n> **Kullanıcısına Başarıyla** <@&' + rol + '> **Rolü verildi**')
  .setColor('#f6ff00')    //.setFooter(`<@member.id>`)
  .setFooter('Cowboyu Tercih Ettiğiniz İçin Teşekkür Ederiz.')
  member.guild.channels.cache.get(kanal).send(embed)

})
//////////////////////// OTOROL SON //////////////////////////
///////////////////////// SAYAÇ ////////////////////
//-----------------------Sayaç-----------------------\\


client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = client.channels.cache.get(skanal9)
  if (!skanal31) return;
  const geldi = new Discord.MessageEmbed()
.setColor('#f6ff00')
.setThumbnail(member.user.displayAvatarURL({dynamic : true}))
.addField( `***╭−−−−−−−−−−− \`『 Cowboy Sayaç° 』\` −−−−−−−−−−−−╮ ***`,
    `
**┊** <:onaytiki:813053491445760000> **${member}** Sunucuya Katıldı
**┊** <:onaytiki:813053491445760000> **${sayac}** Kişi Olmamıza **${sayac - member.guild.memberCount}** Kişi Kaldı
**┊** <:onaytiki:813053491445760000> Toplam **${member.guild.memberCount}** Kişiyiz !
**╰−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−╯**
  `)
  skanal31.send(geldi)
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = client.channels.cache.get(skanal9)
  if (!skanal31) return;
const gitti = new Discord.MessageEmbed()
.setColor('#f6ff00')
.setThumbnail(member.user.displayAvatarURL({dynamic : true}))
.addField( `***╭−−−−−−−−−−− \`『 Cowboy Sayaç° 』\` −−−−−−−−−−−−╮ ***`,
    `
**┊** negative_squared_cross_mark:  **${member}** Sunucudan Ayrıldı
**┊** negative_squared_cross_mark:  **${sayac}** Kişi Olmamıza **${sayac - member.guild.memberCount}** Kişi Kaldı
**┊** negative_squared_cross_mark:  Toplam **${member.guild.memberCount}** Kişiyiz !
**╰−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−╯**
   `)
  skanal31.send(gitti)
});

//-----------------------Sayaç Son-----------------------\\

//------------------OTOTAG SİSTEMİ--------------------\\

client.on("guildMemberAdd", async member => {
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${member.guild.id}`) 
let frenzykanal = await db.fetch(`Frenzy?Code?OtotagKanal_${member.guild.id}`)
if(!frenzy_ibrahim || !frenzykanal) return
  
  var embed2 = new Discord.MessageEmbed()
  .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
    .setColor("#f6ff00")
    .setAuthor("Ototag Sistemi")
    .setDescription(
      `**<:onaytiki:813053491445760000> ${member.user.username}** Adlı Kullanıcıya Başarıyla **${frenzy_ibrahim}** Tagı'nı Verdim <a:tmdir:778774341357797378>`
          );
      
 
 member.setNickname(`${frenzy_ibrahim} ${member.user.username}`)
client.channels.cache.get(frenzykanal).send(embed2)
 
});


//------------OTOTAG SİSTEMİ SON-----------------\\
//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel --------------------//
 //-------------------- Mod Log Sistemi --------------------//

 client.on('channelCreate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL())
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL())

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\nID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL())
    c.send(embed)
});

client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\nID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL())

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\nID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL())

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(db.fetch(`codeminglog_${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL())

    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL())
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL())

    channel.send(embed)
});

client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL())
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL())

    channel.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.cache.get(db.fetch(`codeminglog_${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                  //  .addField(`Kanal:`,`${message.channel.name}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL())

    channel.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.cache.get(db.fetch(`codeminglog_${oldMessage.guild.id}`));
    if(!channel) return;

    let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("Black")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL()}`)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("Black")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL())

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("Black")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL())

    channel.send(embed)
})

//-------------------- Mod Log Sistemi --------------------//


client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa'){
          
        const sa = new Discord.MessageEmbed()
        .setColor('#f6ff00')
        .addField('Aleykum Selam Hoşgeldin İyi misin ?','İnşallah İyisindir.')
          msg.channel.send(sa).then(a=>a.delete({timeout:60000}));
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'hi'){
          
        msg.reply('**Hi welcome**').then(a=>a.delete({timeout:60000})); 
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sea'){
          
        const sea = new Discord.MessageEmbed()
        .setColor('#f6ff00')
        .addField('Aleykum Selam Hoşgeldin İyi misin ?','İnşallah İyisindir.')
          msg.channel.send(sea).then(a=>a.delete({timeout:60000})); 
      }
      }
    });
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'iyiyim'){
          
        const iyilik = new Discord.MessageEmbed()
        .setColor('#f6ff00')
        .setTitle(` İyi Olmana Sevindim.`, msg.author.avatarURL())
          msg.channel.send(iyilik).then(a=>a.delete({timeout:60000}));  
      }
      }
    });
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'kötüyüm'){
          
        const kötülük = new Discord.MessageEmbed()
        .setColor('#f6ff00')
        .setTitle(` Kötü Olmana Üzüldüm.`, msg.author.avatarURL())
          msg.channel.send(kötülük).then(a=>a.delete({timeout:60000}));  
      }
      }
    });

    client.on('message', async (msg, member, guild) => {
      let i = await  db.fetch(`saas_${msg.guild.id}`)
          if(i === 'açık') {
            if (msg.content.toLowerCase() === 'sanane'){
              
            const kötülük = new Discord.MessageEmbed()
            .setColor('#f6ff00')
            .setTitle(` Öyle cevap vermene gerek yoktu..`, msg.author.avatarURL())
              msg.channel.send(kötülük).then(a=>a.delete({timeout:60000}));  
          }
          }
        });

//-----------------------Sa-As Son-----------------------\\


client.login(ayarlar.token);

