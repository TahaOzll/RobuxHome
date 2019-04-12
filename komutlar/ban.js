const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` **Adlı Komutu Özel Mesajlarda Kullanamasın**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip');
  if (!modlog) return message.reply('**`ceza-takip` Kanalını Bulamıyorum.**');
  if (reason.length < 1) return message.reply('**Sunucudan Atma Sebebini Yazmalısın.**');
  if (message.mentions.users.size < 1) return message.reply('**Kimi Sunucudan Atacağını Yazmalısın.**').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('**Yetkilileri Sunucudan Atamam.**');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `**${user.username}#${user.discriminator}**`)
    .addField('Kim Attı:', `**${message.author.username}#${message.author.discriminator}**`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
