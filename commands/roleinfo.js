const Discord = require('discord.js')
const moment = require('moment')
const delay = ms => new Promise(res => setTimeout(res, ms));
var cinfo = new Set()

module.exports.run = async (client, message, args, database) => {
    var cargo = message.mentions.roles.first();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Role Info`)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor(`#0f4bff`)
    .addField("Nome", `\`${cargo.name}\``)
    .addField("ID", `\`<&${cargo.id}>\``)
    .addField("Posição", `${cargo.position}`)
    .addField("Cor", `\`${cargo.hexColor}\``)
    .addField("Menção", `${cargo.rawPosition}`)
    .addField("Criador", `${moment(cargo)}`)
    message.channel.send(embed)
}

module.exports.help = {
name: 'roleinfo',
aliases: ['rinfo']
}