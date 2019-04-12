const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(100);
message.channel.send("**100 Adet Mesaj Sildim**").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'msil',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'msil <miktar>'
};
