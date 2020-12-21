const Discord = require("discord.js"),
client = new Discord.Client();
const ayar = ("../config.js")
const data = {
  Settings: {
    Yetkiler: ["783345825345568788"],
    ErkekRolleri: ["788615678751014963"],
    KizRolleri: ["788615678361600080"],
    KayitsizRolleri: ["783346366188355624"]
  },
}
module.exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!member) return message.channel.send(new Discord.MessageEmbed().setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${ayar.prefix || '.'}kayıtsız @üye \``)).then(x => x.delete({timeout: 10000}));
  if (!message.member.roles.cache.has('783345825345568788') && !message.member.hasPermission("ADMINISTRATOR")) return message.reply('Kayıt Yetkin Bulunmuyor!').then(x => x.delete({timeout: 10000}));
 if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(x => x.delete({timeout: 5000}));
  member.roles.set(data.Settings.KayitsizRolleri)
let kayıtsız = new Discord.MessageEmbed()
.setTitle('PHENTOS')
.setFooter('PHENTOS')
.setColor('RANDOM').
setDescription('Kayıtsıza Atıldı!')

message.channel.send(kayıtsız).then(x => x.delete({timeout: 5000}));
};

exports.config = {
  name: "kayitsiz",
  guildOnly: true,
  aliases: ["kayıtsız"],
};