const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/382580600697126924/382594899242909696/tumblr_ops716T3QY1sujdjco1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594868549255168/tumblr_om9ir6PSas1vy1wx4o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594845895688192/tumblr_o0wnt6Ut3F1s22rc8o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594842171146250/tumblr_ott4yltJG81ukqbp7o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594829701349376/tumblr_o8rb7zELcf1u46qteo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594813276585994/tumblr_ot0tg7c8Sr1vy1wx4o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594804711686145/tumblr_ol45svaSEO1w4spvvo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594804091191306/tumblr_ol0xwczy8i1vy1wx4o1_500.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382594796092522497/tumblr_nl4dy2fh821rj305uo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594713074532363/tumblr_outqqelDD81w0p0qno1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594590143938560/tumblr_nk88nbfV8w1sjt6sco1_500.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['çayic', 'cayic','Cayic'],
 permLevel: 0 ,
};

exports.help = {
 name: 'çayiç',
 description: 'Çay İçersiniz',
 usage: 'cilgin'
};
