const Discord = require('discord.js')

module.exports = {
    name: 'covidsin',
	description: 'Sintomas do COVID-19',
    aliases: ['covidsintoma', 'c19sin'],
    usage: '$covidsin',
    cooldown: 5,
	run: async (client, message, args) => {
    
    let covidsin = new Discord.MessageEmbed()
    .setTitle("Sintomas COVID-19")
    .addField("Sintomas mais comuns", " Febre\n Tosse\n  Cansaço")
    .addField("Sintomas menos comuns", " Dores e desconfortos\n  Dor de garganta\n  Diarreia\n  Conjutivite\n  Dor de cabeça\n  Perda de paladar\n  Erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés")
    .addField("Sintomas graves", " Dificuldade de respirar ou falta de ar\n  Dor ou pressão no peito\n  Perda de fala ou movimento")
    .setColor('#8500de')
    .setThumbnail('https://images.vexels.com/media/users/3/193239/isolated/preview/e83db85552ee35f6276411c9f19d982d-covid-19-boy-character-icon-by-vexels.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(covidsin)

    }
}