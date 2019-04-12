const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription("**Lütfen Bir ```Sayı``` Yazın!**")
			.setColor(0xD97634)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));

	if(args[0] === "**Sıfırla**") {
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Sıfırlamak İçin Önce **Ayarlamalısın**`)
				.setColor(0xD97634)
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id].sayi
		delete profil[message.guild.id]
		fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`**Sayaç Başarıyla Sıfırlandı**`)
			.setColor(0xD97634)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(isNaN(args[0])) {
		const embed = new Discord.RichEmbed()
			.setDescription("**Lütfen Bir ```Sayı``` Yazın!**")
			.setColor(0xD97634)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.members.size) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen Sunucu Üyesinden **[${message.guild.members.size}]** Daya Yüksek Bir Değer Girin`)
			.setColor(0xD97634)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0]
		};
	}

	profil[message.guild.id].sayi = args[0]

	fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.RichEmbed()
		.setDescription(`Sayaç Başarıyla **${args[0]}** Olarak Ayarlandı!
    **Not: Çalışması İçin [sayaç] İsimli Kanal Açınız**`)
		.setColor(0xD97634)
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayaçayarla', 'sayac', 'sayaç'],
	permLevel: 2
}

exports.help = {
	name: 'sayaçayarla',
	description: 'Sayacı ayarlar.',
	usage: 'sayaçayarla [sayı/sıfırla]'
}
