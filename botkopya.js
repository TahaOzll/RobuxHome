const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} Adı İle Aktifleşti`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }

  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('**Aleyküm Selam Kanka Hoşgeldin**');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'sil') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("**100 Adet Mesajı Sildim**");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('**Yapımcım Sen Değilsin Bir Daha Deneme!**');
    } else {
      msg.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(msg => {
      console.log(`**BOT: Bot yeniden başlatılıyor...**`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
