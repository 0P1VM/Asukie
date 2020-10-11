const { MessageEmbed } = require('discord.js')
const db = require ('quick.db')
const c = require('../config.json')

exports.run = async (client, message, args) => {
message.delete();

    let embedDev = new MessageEmbed()
    .setDescription("<a:errado:753245066965024871> **|** Apenas meus desenvolvedores podem utilizar este comando!")
.setColor(`#8500de`)
    let embedDev1 = new MessageEmbed()
    .setDescription(`**Me informe o status para a manutenção.**\n` +
	`\n**Váriaveis:** \`${c.prefix}manutencao on\` **/** \`${c.prefix}manutencao off\``)
.setColor(`#8500de`)
    if(!args[0]) return message.channel.send(embedDev1)
    
    if (!['752954404986159275', '719944880800923690'].includes(message.author.id)) {
    return message.channel.send(embedDev)
        .then(msg => msg.delete({ timeout: 10000}))
    
    } else {
      
        if(args[0] === 'off') {
          
            let embedon = new MessageEmbed()
            
.setDescription(`<:b_offline2:753979547279687801> **|** Manutenção Desativada\n` + 
                `\n<:seta1:762492762192478216> Para ativar a manutenção, utilize \`${c.prefix}manutencao on\``)
.setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setColor(`#8500de`)
            db.set(`manutenção`, true)
            
            message.channel.send(embedon)

        } else if(args[0] === 'on') {
          
            let embedoff = new MessageEmbed()
            
.setDescription(`<:online:753979848883568720> **|** Manutenção Ativada\n` + 
                `\n<:seta1:762492762192478216> Para desativar a manutenção, utilize \`${c.prefix}manutencao off\``)
.setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setColor(`#8500de`)

            db.set(`manutenção`, null)

            message.channel.send(embedoff)
        }
    }
}
exports.help = { 
  name: 'manutenção',
  aliases: ['manutencao']
}