const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {

  this.fighting = new Set();

	let opponent = message.mentions.users.first()
	if (!opponent) return message.reply("**Oynamak istediğin kişiyi etiketlemelisin!**")

  if (opponent.bot) return message.reply('**Botlar ile oynayamazsın!**');
  if (opponent.id === message.author.id) return message.reply('**Kendin ile düello atamazsın!**');
		if (this.fighting.has(message.channel.id)) return message.reply('**Kanal başına sadece bir düello meydana gelebilir.**');
		this.fighting.add(message.channel.id);
		try {
			if (!opponent.bot) {
                await message.channel.send(`**${opponent}, Düello İsteği Geldi. Düello'yu Kabul Ediyor Musun? (\`evet\` veya \`hayır\` Olarak Cevap Veriniz.)**`);
				const verification = await verify(message.channel, opponent);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`**Üzgünüm Düello Teklifiniz Kabul Edilmedi..**`);
				}
			}
			let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) {
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					await message.channel.send(stripIndents`
						**${user}, Ne Yapmak İstersiniz \`saldır\`, \`kalkan\`, \`özel güç\`, veya \`kaç\`?**
						**${message.author.username}**: ${userHP} :heartpulse:
						**${opponent.username}**: ${oppoHP} :heartpulse:
					`);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'kalkan', 'özel güç', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`**Üzgünüm Fakat Maçın Süresi Doldu**`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'kalkan', 'özel güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'kalkan') {
					await message.channel.send(`**${user}, Kendini Kalkanı İle Korudu**`);
					guard = true;
					reset(false);
				} else if (choice === 'özel güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						await message.channel.send(`**${user}, Türkiyeden Yeterli Miktarda Enerji Depoladın Ve Vuruşun Tam Olarak  **${damage}** Hasar Vurdu!!**`);
						dealDamage(damage);
					} else {
						await message.channel.send(`**${user}, Türkiyeden Yeterli Miktarda Enerji Depolayamadın Birazdaha Bekleyip Enerji Depola**`);
					}
					reset();
				} else if (choice === 'kaç') {
					await message.channel.send(`${user}, Kaçtı! Korkak!`);
					forfeit();
					break;
				} else {
					await message.reply('**Ne Yapmak İstediğini Tam Olarak Anlıyamadım**');
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
			return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş'],
  permLevel: 0
};

exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};
