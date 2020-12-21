const Discord = require("discord.js"),
client = new Discord.Client();
const ayar = require("../config.js");

module.exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has('783345825345568788') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Yardım komutunu kullanmak için yeterli yetkiye sahip değilsin!`)).then(x => x.delete({timeout: 10000}));
  let yardım = new Discord.MessageEmbed()
  .setTitle('YARDIM')
  .setColor('RANDOM')
  .setDescription(`
  **${ayar.prefix}isim @etiket İsim Yaş = Etiketlediğiniz üyenin ismini ve yaşını değiştirir.**
  
  **${ayar.prefix}isimler @etiket = Etiketlediğiniz üyenin isim geçmişini görürsünüz.**
  
  **${ayar.prefix}kayıtsız @etiket = Etiketlediğiniz kişiyi kayıtsıza atarsınız.**
  
  **${ayar.prefix}kbilgi @etiket = Etiketlediğiniz kişinin genel bilgilerini görürsünüz.**
  
  **${ayar.prefix}kayıt @etiket İsim Yaş = Etiketlediğiniz kişiyi kayıt edersiniz.**
  
  **${ayar.prefix}top = Top teyit yapan yetkililerin sırasını görürsünüz.**
  `)
  message.channel.send(yardım)
};

exports.config = {
  name: "help",
  guildOnly: true,
  aliases: ["yardım"],
};