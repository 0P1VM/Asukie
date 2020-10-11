 const Discord = require('discord.js');
var steam = require('steam-provider') //npm i steam-provider
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
 
let arg = args.join(' ') //Puxa os argumentos do  usuário
if(!arg) return message.channel.send(`<a:errado:753245066965024871> **|** ${message.author}, você precisa colocar um jogo!`) //retorna quando o usuário não coloca um jogo
provider.search(arg).then(result => { //vai mostrar o resultado
    provider.detail(result[0].id, 1, "portuguese", "pt").then(results => { //tenta mostrar o resultado em Português (Brasil)
        let other = results.otherData //vai pegar os dados do jogo
        const embed = new Discord.MessageEmbed() //vai mostrar para o usuário todas as informações do jogo
                    .setTitle(results.name)
                    .setDescription(`\n\n**Gênero:** ${results.genres.join(', ')} \n**Plataforma:** ${other.platforms.join(', ')}\n**Características:** ${other.features.join(', ')}\n\n**Developer:** ${other.developer.join(', ')}`)
                    .setThumbnail(other.imageUrl)
                    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    .setColor('#8500de')
        message.channel.send(embed)
    })
})
}

exports.help = {
    name: 'steam',
    aliases: ['steaming'],
  }