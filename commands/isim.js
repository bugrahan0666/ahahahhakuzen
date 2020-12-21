const { MessageEmbed } = require('discord.js');
const qdb = require("quick.db");
const rdb = new qdb.table("teyitler");
const kdb = new qdb.table("kullanici");
const ayar = require("../config.js");
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor("RANDOM").setFooter(`PHENTOS`);
    if (!message.member.roles.cache.has(ayar.kayitSorumlusu) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Bu komutu kullanmak için gerekli izinlere sahip değilsin.`)).then(x => x.delete({timeout: 10000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let isim = args[1];
    let yaş = Number (args[2]);
  let tag = "+";
    let yaziIsım = `${tag} ${isim} | ${yaş}`

    if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed.setDescription(`Kayıt etmeye çalıştığın kişi seninle aynı yetkide veya senden daha üstte olduğu için işlemi gerçekleştiremedim.`)).then(x => x.delete({timeout: 10000}));
    if (!member || !isim || !yaş) return message.channel.send(embed.setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${ayar.prefix || '.'}nick @üye isim yaş\``)).then(x => x.delete({timeout: 10000}));
    member.setNickname(`${tag} ${isim} | ${yaş}`).catch();
      let data = kdb.get(`isimler.${member.id}`);
 let listedData = data.length > 0 ? data.map((value, index) => `\`${index + 1}.\` ${value.guildName} ismiyle \`${new Date(value.Zaman).toTurkishFormatDate()}\` tarihinde ${message.guild.members.cache.has(value.Yetkili) ? message.guild.members.cache.get(value.Yetkili) : "Bulunamadı."} tarafından **${value.Komut}** olarak kaydedildi.`) : "Bu Üyenin İsim Geçmişi Bulunamadı.";
    message.channel.send(embed.setDescription(`${member} üyesinin ismi ${yaziIsım} olarak değiştirildi! 
    ${listedData.join("\n")}`));
let komut;
 if (member.roles.cache.has(ayar.erkekRol1) && !member.roles.cache.has(ayar.kadinRol1)) komut = "Erkek"
 if (member.roles.cache.has(ayar.kadinRol1) && !member.roles.cache.has(ayar.erkekRol1)) komut = "Kadın"
 if (!member.roles.cache.has(ayar.erkekRol1) && !member.roles.cache.has(ayar.kadinRol1)) komut = "Bulunamadı"  

    kdb.push(`isimler.${member.id}`, {
        guildName: `${ayar.tag || ""} ${isim} | ${yaş}`,
        Name: isim,
        Age: yaş,
        Zaman: Date.now(),
        Yetkili: message.author.id,
        Komut: komut
    });
};

exports.config = {
  name: "isim",
  guildOnly: true,
  aliases: ["nick"],
};