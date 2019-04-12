const Discord = require('discord.js');
const client = new Discord.Client();
var coolImages = require('cool-images')

exports.run = (client, message) => {
 message.channel.send({embed: {
          "image": {
          url: coolImages.one(600, 800)},
          color: 0xD97634,
            }});};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g'],
  permLevel: 0
};

exports.help = {
  name: 'güzelresim',
  description: 'Güzel Resim Gösterir',
  usage: 'güzelresim'
};
