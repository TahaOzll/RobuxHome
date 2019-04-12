exports.run = (client, message, args) => {
    var command = args[0];
    message.channel.send("`" + command + "` **Adlı Komut Yükleniyor...**")
      .then(m => {
        client.load(command)
          .then(() => {
            m.edit("`" + command + "` **Adlı Komut Başarıyla Yüklendi.**");
          })
          .catch(e => {
            m.edit(`**Komut Yüklenirken Hata Oluştu:** ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 4
};

exports.help = {
  name: 'load',
  description: 'Yeni eklenen komutu yükler.',
  usage: 'load <komut adı>'
};
