const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

	const yardım = new  Discord.RichEmbed()
	.setColor(0xD97634)
	.setAuthor(`Robux Home`, client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`:red_circle:  **Biz Kimiz** :red_circle: `, `**Biz Sizlere Bedava Robux Veya Discord Sunucu Veyada Roblox Hesapları Veren Fakat Bunları Çekilişle Yapan Kişileriz (!!!KİMSENİN HAKKINI YEMEYİZ!!!)**`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

    return message.channel.sendEmbed(yardım);

};



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kimlersiniz', 'sizkimsiniz'],
  permLevel: 0
};

exports.help = {
  name: 'kimsiniz',
  description: 'Kurucumu Tanıtır',
  usage: 'kimsiniz '
};
