const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "564104927337644042";
	var channelID = "565034941575069696";

	if (!öneri){
		return message.reply("**Bir Öneri Belirtiniz Doğru Kullanım = | +öneri <öneri> | **");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.setAuthor("🌟Üyelerimizden Öneriler🌟 ", client.user.avatarURL)
			.setThumbnail(client.user.avatarURL)
			.setColor(0xD97634)
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)

		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("**Önerizin Kabul Edilmiştir Teşekkür Ederiz.**");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'öneri <mesaj>'
};
