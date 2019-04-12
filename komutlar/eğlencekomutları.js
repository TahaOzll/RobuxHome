const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
    const yardım = new  Discord.RichEmbed()
    .setColor(0xD97634)
    .setAuthor(`🌟🌟🌟 `, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription("**🌟Eğlence Komutları🌟\n:small_blue_diamond: | +havadurumu = İstediğiniz Şehirin Hava Durumunu Gösterir\n:small_blue_diamond: | +çayiç = Çay Resmi Gönderir\n:small_blue_diamond: | +güzelresim = Doğadan Veya Teknoloji Aletlerden Güzel Resim Gönderir\n:small_blue_diamond: | +8ball = Sorduğun Soruyo Rastgele Cevap Verir\n:small_blue_diamond: | +aşkölçer = İstediğiniz Kişinin Size Olan Aşkını Gösterir\n:small_blue_diamond: | +hesapla = Bir Matematik İşlemini Cevaplar\n:small_blue_diamond: | +mcödül = Minecraft Oyunundan Eşya Kazanırsınız Eğlence Amaçlıdır\n:small_blue_diamond: | +saat = Saati Gösterir\n:small_blue_diamond: | +stresçarkı = Sizin Adınıza Stres Çarkı Çevirir\n:small_blue_diamond: | +çayaşekerat = Çayınıza Şeker Attar\n:small_blue_diamond: | +çekiç = İstediğiniz Kişiye Çekiç Attar\n:small_blue_diamond: | +emojiyazo = İstediğiniz Kelimeyi Emojiyle Yazar\n🌟Devamı Eklenecektir🌟**")
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eğlence', 'eğlenc'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence Komutlarını Gösterir',
  usage: 'eğlence '
};
