const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('**Yazmam İçin Birşey Yaz**');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 4
};

exports.help = {
  name: 'yaz',
  description: 'Yazmak İstediğiniz Şeyi Bota Yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
