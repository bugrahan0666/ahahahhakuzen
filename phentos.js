const Discord = require("discord.js")    
const client = new Discord.Client();       
const config = require("./config.js")           
const moment = require('moment')
const fs = require("fs");               
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);              
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                  
    let props = require(`./commands/${f}`);  
    console.log(`${props.config.name} komutu yüklendi.`);  
    console.log(`Phentos <3`) 
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

Date.prototype.toTurkishFormatDate = function (format) {
    let date = this,
      day = date.getDate(),
      weekDay = date.getDay(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
  
    let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
  
    if (!format) {
      format = "dd MM yyyy | hh:ii:ss";
    };
    format = format.replace("mm", month.toString().padStart(2, "0"));
    format = format.replace("MM", monthNames[month]);
    
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    };
    
    format = format.replace("dd", day.toString().padStart(2, "0"));
    format = format.replace("DD", dayNames[weekDay]);
  
    if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
    if (format.indexOf("hh") > -1) {
      if (hours > 12) hours -= 12;
      if (hours === 0) hours = 12;
      format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
    };
    if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
    if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
    return format;
  };

client.on('guildMemberAdd', async phentos => {
  
  const phentoss = '737056938608558101'
  
  const phentosk = '783346525274243152';
  

  
  const pembedk = new Discord.MessageEmbed()
  .setTitle('Sunucumuza Birisi Geldi ?')
  .setFooter('Çok İyisin Bakıyorumda ;)')
  .setColor('RANDOM')
  //.setImage('resimlinki') dilerseniz resim ekleyebilirsiniz.
  .setDescription(` :heart: ${phentos} Sunucumuza Hoşgeldin! 
  
  :heart: Seninle birlikte toplam __${phentos.guild.memberCount}__ Kişi Olduk!
  
  
  :heart: Hesabınız **${moment(phentos.user.createdAt).format(`DD/MM/YYYY | HH:mm:ss`)}** Tarihinde Açılmış.
  
  :heart: Kaydınızı yapmak için **Register** rolünüzdeki yetkililer birazdan sizlerle ilgilenecek.
  
  `)
  
    client.channels.cache.get(phentosk).send(pembedk);
  

  
})

const sayiEmojiler = {
  0: "<a:sayi0:783354477348519966>",
  1: "<a:sayi1:783355344125820938>",
  2: "<a:sayi2:783355376321822730>",
  3: "<a:sayi3:783355391614124073>",
  4: "<a:sayi4:783355414971809833>",
  5: "<a:sayi5:783355424220119060>",
  6: "<a:sayi6:783355446328688640>",
  7: "<a:sayi7:783355464981151746>",
  8: "<a:sayi8:783355487918751772>",
  9: "<a:sayi9:783355525101387777>"
};


client.login(config.token)
