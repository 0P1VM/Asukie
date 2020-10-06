const Discord = require('discord.js')
const c = require('../config.json')

exports.run = async (bot, message, args) => {
message.delete();

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`> <:erro:753980737484750967> **|** Oops! Eu não tenho a permissão para \`Gerenciar Canais\``).then(m => {
    m.delete({timeout : 7000})
    });
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`> <:erro:753980737484750967> **|** Oops! Você não tem a permissão de \`Gerenciar Canais\``).then(m => {
    m.delete({timeout : 7000})
    });

    let a2 = new Discord.MessageEmbed()
    .setDescription(`**Este canal foi bloqueado por ${message.author}**\n` +
`Você pode finalizar o bloqueio digitando \`${c.prefix}unlock\` ou reagindo no cadeado.`)
.setColor("#8500de")
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setTimestamp();

    let a3 = new Discord.MessageEmbed()

.setDescription(`**Este canal foi desbloqueado por ${message.author}.**`)
.setColor("#8500de")
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setTimestamp();
    message.channel.updateOverwrite(message.guild.roles.everyone, {SEND_MESSAGES: false})
    message.channel.send(a2).then(msg => {
      msg.react('🔓')

      let filtro = (reaction, usuario) => reaction.emoji.name === '🔓' && usuario.id == message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1})

      coletor.on('collect', cp => {
        msg.delete();
        msg.channel.send(a3).then(m => {
    m.delete({timeout : 9000})
  })
        message.channel.updateOverwrite(message.guild.roles.everyone, {SEND_MESSAGES: true});
                
      })
    })
}