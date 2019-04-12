const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
    const yardım = new  Discord.RichEmbed()
    .setColor(0xD97634)
    .setAuthor(`🌟🌟🌟 `, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription("**🌟Yetkili Komutları🌟\n:small_blue_diamond: | +ban = İstediği Kişiyi Sunucudan Kalıcı Olarak Banlar\n:small_blue_diamond: | +kick = İstediği Kişiyi Sunucudan  Süreli Şekilde Attar\n:small_blue_diamond: | +uyar = Kurallara Uymayan Kişiye Uyarı Verir\n:small_blue_diamond: | +sustur = Chate Küfür Eden Hakaret VB. Kişileri Susturur\n:small_blue_diamond: | +rolver = Kurucudan İzin Alarak Üyelere Rol Verir\n:small_blue_diamond: | +load = Yüklenmeyen Komutları Yükler\n:small_blue_diamond:| +sahip = Sahip Komutlarını Gösterir\n:small_blue_diamond: | +eval = Kod Dener\n:small_blue_diamond: | +duyur = Botun Olduğu Her Sunucudaki Kişilere Özelden Duyuru Yapar\n:small_blue_diamond: | +kilit = Süreli Bir Şekilde Bir Sohbet Alanını Kapatır\n:small_blue_diamond: | +msil = 100 Tane Mesaj Siler\n🌟Devamı Eklenecektir🌟**")
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'BelirlYetkili Komutlarını Gösterir',
  usage: 'yetkili '
};
