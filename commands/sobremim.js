const Discord = require('discord.js')
const db = require('quick.db')
const c = require('../config.json')

exports.run = async (bot, message, args) => {
message.delete();

   let a1 = new Discord.MessageEmbed()
   .setDescription(`🔔 | Insira uma mensagem para alterar o Sobre Mim`)
   var membro = message.author;

   let desc = args.slice(0).join(" ");
   if(!desc) return message.channel.send(a1)

   let a2 = new Discord.MessageEmbed()
   .setTitle(`${message.author.tag}`)
   .setDescription(`✅ | Você alterou o SobreMim com sucesso`)

    db.set(`sobremim_${membro.id}`, desc)
    message.channel.send(a2)
}

exports.help = {
name: 'editimage',
aliases: ['setimage', 'image']
}