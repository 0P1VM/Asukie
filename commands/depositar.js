const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const c = require('../config.json')

module.exports.run = async (bot, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0]) {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    if(money === 0) return message.channel.send(`🔔 | O valor mínimo para depósito é **R$ 100**`)
    if(!money === money) return message.channel.send(`Insira uma quantia`)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setTitle(`Depósito Bancário`)
  .setDescription(`💵 | Você depositou **R$ ${args[0]}** no seu Banco com sucesso`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  .setTimestamp()
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle(`**Mode de Uso**`)
  .setDescription(`${c.prefix}depositar \`quantidade\` | ${c.prefix}depositarall`)
  .setTimestamp()
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }

  if (message.content.includes('-')) { 
      return message.channel.send(`🔔 | O valor mínimo para depósito é **R$ 100**`)
  }
  if (member < args[0]) {
      return message.channel.send(`🔔 | O valor mínimo para depósito é **R$ 100**`)
  }

  let embed5 = new Discord.MessageEmbed()

  .setTitle(`Depósito Bancário`)
  .setDescription(`💵 | Você depositou **R$ ${args[0]}** no seu Banco com sucesso`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  .setTimestamp()

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}
module.exports.help = {
  name:"deposit",
  aliases: ["dep"]
}