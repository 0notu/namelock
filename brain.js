process.on('error', (e) => {console.log(e)});

const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

const config = require('./config.json');

bot.on('ready', () => {
  console.log("[#] online")
});

bot.on('roleUpdate', (oldR, newR) => { // on new message
  if (oldR.id == "724389608867102810" && newR.name != "Maloy") {
    console.log("Maloy Stop")
    newR.edit({name: "Maloy"}, "You are banished to limbo")
  }
})

bot.login(config.token)
