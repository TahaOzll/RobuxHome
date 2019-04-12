const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
    const yardım = new  Discord.RichEmbed()
    .setColor(0xD97634)
    .setAuthor(`🌟🌟🌟 `, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription("**🌟Diğer Komutlar🌟\n:small_blue_diamond: | +kimsiniz = Bizi Tanıtır\n:small_blue_diamond: | +kayıt = Sunucuya Kayıt Eder\n:small_blue_diamond: | +kullanıcıbilgim = Kullanıcı Bilgilerinizi Gösterir\n:small_blue_diamond: | +öneri = Sunucya Bota Herhangi Birşeye Öneri Yaparsınız\n🌟Devamı Eklenecektir🌟**")
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['diğer', 'diğer'],
  permLevel: 0
};

exports.help = {
  name: 'diğer',
  description: 'Belirli Komutları Komutlarını Gösterir',
  usage: 'diğer '
};
