const Discord = require('discord.js');

const cevaplar = [
    "Evet",
    "Hayır",
    "Şüpeli",
    "Bilmem Sen Daha İyi Bilirsin",
    "Kafam Çok Karışık Daha Sonra Tekrar Sor",
    "Sence Öyle İse Bencede Öyle Panpa",
    "İnterneten Araştırısan Bulursun"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = message.reply(cevaplar[Math.floor(Math.random() * cevaplar.length)]);

    if(!soru) return message.reply('**Bir Soru Sor Doğru Kullanım: +8ball <soru>**')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: '8ball <soru>'
};
