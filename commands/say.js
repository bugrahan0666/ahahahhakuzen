const Discord = require("discord.js");

const mapping = {
  " ": "   ",
   0: "<a:sayi0:783354477348519966>",
  1: "<a:sayi1:783355344125820938>",
  2: "<a:sayi2:783355376321822730>",
  3: "<a:sayi3:783355391614124073>",
  4: "<a:sayi4:783355414971809833>",
  5: "<a:sayi5:783355424220119060>",
  6: "<a:sayi6:783355446328688640>",
  7: "<a:sayi7:783355464981151746>",
  8: "<a:sayi8:783355487918751772>",
  9: "<a:sayi9:783355525101387777>",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
module.exports.run = function(client, message, args) {
    let voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size
  let ses = 'Sesli üye : ' +
      `${count}` 
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let toplam = message.guild.memberCount;
  let sunucu = 'Toplam üye : ' +
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let taglıs = message.guild.roles.cache.filter(x => x.id === '783346088224096307'); 
  let counts = 0
   for (const [id, taglı] of taglıs) counts += taglı.members.size
  let online = 'Taglı üye : ' +
      `${counts}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let booster = message.guild.roles.cache.filter(x => x.id === '783345691106738247')
  let countss = 0
   for (const [id, boostere] of booster) countss += boostere.members.size
  let boosters = 'Booster : ' +
      `${countss}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
   let kız = message.guild.roles.cache.filter(x => x.id === '788615678361600080')
  let kızcıkks = 0
   for (const [id, kızzz] of kız) kızcıkks += kızzz.members.size
  let kızz = 'Kadın üye : ' +
      `${kızcıkks}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
   let erek = message.guild.roles.cache.filter(x => x.id === '788615678751014963')
  let countssssss = 0
   for (const [id, boostereeer] of erek) countssssss += boostereeer.members.size
  let erkek = 'Erkek üye : ' +
      `${countssssss}`
      .split("")
      .map(c => mapping[c] || c)
      .join("") 
 let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let aktif = 'Online üye : ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
const embed = new Discord.MessageEmbed()
.setTitle('Phentos')
.setColor('BLACK')
//.addField("Sunucudaki üye sayısı", message.guild.memberCount)
.setDescription('' + sunucu + '\n \n' + online +  '\n \n' + ses + ' \n \n' + boosters +  ' \n \n' + kızz + ' \n \n' + erkek + ' \n \n' + aktif + '')
.setThumbnail(message.author.avatarURL({dynamic: true}))
//.(online)
  message.channel.send(embed)
  /*message.channel.send('Online sayısı: ' + 
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};
exports.config = {
  name: "say",
  guildOnly: true,
  aliases: [],
};