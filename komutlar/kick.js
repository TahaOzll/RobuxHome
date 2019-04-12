const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` **Adlı Komutu Özel Mesajlarda Kullanamasın**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip');
  if (!modlog) return message.reply('**`ceza-takip` Kanalını Bulamıyorum.**');
  if (reason.length < 1) return message.reply('**Sunucudan Atma Sebebini Yazmalısın.**');
  if (message.mentions.users.size < 1) return message.reply('**Kimi Sunucudan Atacağını Yazmalısın.**').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('**Yetkilileri Sunucudan Atamam.**');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan [KİCKLEME]')
    .addField('Kullanıcı:', `**${user.username}#${user.discriminator} (${user.id})**`)
    .addField('Kim Attı:', `**${message.author.username}#${message.author.discriminator}**`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
