  const Discord = require('discord.js');
  const ayarlar = require('../ayarlar.json')

  var prefix = ayarlar.prefix;

  exports.run = async (client, message, params, args) => {
      const yardım = new  Discord.RichEmbed()
      .setColor(0xD97634)
      .setAuthor(`🌟Yardım İçin Hazır🌟 `, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription("**🌟Komutlar🌟**\n**[1]: +yetkili = Yetkili Komutlarını Gösterir :[1]**\n**[2]: +eğlence = Eğlence Komutlarını Gösterir :[2]**\n**[3]: +diğer = Herkesin Kullanabileceiği Komutlar[3]**\n**🌟Şimdilik Komutlar Bukadar Devam Gelicektir🌟**")
      .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
      .setFooter("🌟Taha🌟")
      return message.channel.sendEmbed(yardım);
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yardım', 'help'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'Belirlenen miktarda mesajı siler.',
    usage: 'yardım '
  };
