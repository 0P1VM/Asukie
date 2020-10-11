const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete();


   let a1 = new Discord.MessageEmbed()
   .setDescription('${message.author} **|** Você esqueceu de colocar a URL da nova imagem.')
   var membro = message.author;

   let image = args[0];
   if(!image) return message.channel.send(a1)

   let a2 = new Discord.MessageEmbed()
   .setDescription(`${message.author} **|** Sua nova imagem foi atualizada com sucesso!`)
   .setImage(image)

    db.set(`image_${membro.id}`, image)
    message.channel.send(`${message.author} **|** Prontinho! Atualizei sua Imagem de perfil.`)
}

exports.help = {
name: 'editimage',
aliases: ['setimage', 'image']
}