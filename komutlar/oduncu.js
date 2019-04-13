const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Oduncu**")
        .setImage("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setColor(0xD97634)
        .addField("Lakabı", "The Lumberjack (Oduncu)", true)
        .addField("Yetenekleri", `
        *Çok güzel bir baltası var
   *Korkunç Bir Yaratık
   `, true)
   .addField("Kaç", `Adam Ağçaları Kesiyor Hemde Sebebsiz Yere`, true)
   .addField("Oduncudan Kaçın", "Ondan Kaçmazsanız Sizi Yiyebilir")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'woodie', 
  description: 'Woodie the Lumberjack hakkında bilgi verir',
  usage: 'woodie'
};
