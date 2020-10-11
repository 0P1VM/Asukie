const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {

  let user = message.mentions.members.first() || message.author;

  let bal = db.get(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.get(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setTitle(`${user.tag}`)
  .setDescription(`💵 | **Carteira:** R$ ${bal}\n` +
  `💵 | **Banco:**  R$ ${bank}`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}