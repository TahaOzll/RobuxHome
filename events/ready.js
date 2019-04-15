const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Aktifleşti`);
  client.user.setStatus("online");
   var oyun = [
        "+yardım Komutu İle Botun Komutlarını Öğren!",
        "Discord Bot List Sitesine Girip Bana (OY VER)",
        "Sunucumuz 7/24 Güvenlik Sistemlerimle Korunuyor",
        "Prefix = + Bu Komut Olmadan Bir Komut Çalıştıramasınız!",
        "Kurucu = MS S.|Scripter"

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/tahaozll");
        }, 2 * 2500);
}
