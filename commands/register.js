const Discord = require("discord.js"),
client = new Discord.Client();
const qdb = require("quick.db");
const rdb = new qdb.table("teyitler");
const kdb = new qdb.table("kullanici");
const ayar = require("../config.js");
const data = {
  Settings: {
    Yetkiler: ["783345825345568788"],
    ErkekRolleri: ["788615678751014963"],
    KizRolleri: ["788615678361600080"],
    KayitsizRolleri: ["783346366188355624"]
  },
}

module.exports.run = async (client, message, args) => {
if (!message.member.roles.cache.has('783345825345568788') && !message.member.hasPermission("ADMINISTRATOR")) return message.reply('Yetkin yok').then(x => x.delete({timeout: 10000}));
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   let isim = args[1];
    let yaş = Number (args[2]);
  let tag = '+';
    if (!member || !isim || !yaş) return message.channel.send(new Discord.MessageEmbed().setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${ayar.prefix || '.'}e @üye isim yaş\``)).then(x => x.delete({timeout: 10000}));

  member.setNickname(`${tag} ${isim} | ${yaş}`)
      let mesaj = await message.channel.send(new Discord.MessageEmbed()
        .setDescription("*Aşağıdan etiketlediğin kişinin cinsiyetini seç.*")
        .setFooter(`${ayar.prefix}isimler ile isimleri gör!`)
        .setColor("RANDOM")
        .addField("Kız", "1️⃣", true)
        .addField("Erkek", "2️⃣", true)
      ).then(async m => {
        await m.react("1️⃣")
        await m.react("2️⃣")
        return m;
      }).catch(err => undefined);
      let react = await mesaj.awaitReactions((reaction, user) => user.id == message.author.id && Emojiler.some(emoji => emoji == reaction.emoji.name), { errors: ["time"], max: 1, time: 15000 }).then(coll => coll.first()).catch(err => { mesaj.delete().catch(); return; });
      if(!react) return;
      let seçim = "";
      if (react.emoji.name == "1️⃣")
        seçim = "KizRolleri";
      else if (react.emoji.name == "2️⃣")
        seçim = "ErkekRolleri";
      else {
        return;
      }
      mesaj = await mesaj.reactions.removeAll();
     
     
	 
      data.Settings[seçim].forEach(async rol => {
        await member.roles.set([rol]);
        
        if(seçim === "ErkekRolleri"){
          member.roles.add("788615678751014963")
          member.roles.add
           rdb.add(`reg.${message.author.id}.erkek`, +1);
            kdb.push(`isimler.${member.id}`, {
                guildName: `${tag} ${isim} | ${yaş}`,
                Name: isim,
                Age: yaş,
                Zaman: Date.now(),
                Yetkili: message.author.id,
                Komut: "Erkek"
            });
        }else{
          member.roles.add("788615678361600080")
          member.roles.remove("783346366188355624")
             rdb.add(`reg.${message.author.id}.kadin`, +1);
            kdb.push(`isimler.${member.id}`, {
                guildName: `${ayar.tag || ""} ${isim} | ${yaş}`,
                Name: isim,
                Age: yaş,
                Zaman: Date.now(),
                Yetkili: message.author.id,
                Komut: "Kadın"
            });
        }
      })
  
  
   await mesaj.edit(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription("Kayıt Tamamlandı!")
        .setFooter(`${ayar.prefix}isimler komutu ile isim geçmişini gör!`)
        .addField("İşlem ;", member.toString() + " adlı kişiyi " + message.author.toString() + " adlı yetkili kayıt etti!")
      );
  let genelembed = new Discord.MessageEmbed()  
  .setDescription(`${member} aramıza katıldı. Sunucumuz şuanda **${message.guild.memberCount}** kişi! KURALLARI OKUMAYI UNUTMA!`)
  .setColor('RANDOM')
  message.guild.channels.cache.get('783346545113694248').send(genelembed).then(x => x.delete({timeout: 10000}));
};


    
exports.config = {
  name: "kayıt",
  guildOnly: true,
  aliases: [],
};


const Emojiler = [
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣"
]