const Discord = require('discord.js')
const db = require('quick.db')
const c = require('../config.json')

exports.run = async (bot, message, args) => {

    var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
    var sobremim = await db.get(`sobremim_${member.id}`)  

let bank = await db.get(`bank_${message.guild.id}_${member.id}`)

    if(bank === null) bank = (`0`)

    let money = await db.get(`money_${message.guild.id}_${member.id}`)

    if(money === null) money = (`0`)

    let duckets = await db.get(`duckets_${message.guild.id}_${member.id}`)

    if(duckets === null) duckets = (`0`)

    if(sobremim === null) sobremim = (`Luan é o meu criador ❤️`)

        let c = await db.get(`c_${member.id}`)

    if(c === null) c = ('Solteiro(a)')

    let or = ('Mendigo(a)')
    let gc = ('Mendigo(a)')

    let emprego = await db.get(`emprego_${member.id}`)

    if(emprego === null) emprego = ('Mendigo(a)')

        let armas = await db.get(`armas_${member.id}`)

    if(armas === null) armas = ('Desarmado(a)')

    let image = await db.get(`image_${member.id}`)
    if(image === null) image = ('')

     
    if(['752954404986159275'].includes(member.id)) {

      let embed1 = new Discord.MessageEmbed()
        .setTitle(`Perfil`)
        .setFooter(`use: imgperfil ou sobremim para personalizar`)
        .addField('💸 **| Carteira**', `R$ ${money}`, true)
        .addField('💸 **| Banco**', `R$ ${bank}`, true)
        .addField('🔆 **| Level**', 'em breve..', true)
        .addField('💠 **| Duckets**', duckets, true)
        .addField('💼 **| Profissão**', gc, true)
        .addField('💍 **| Relacionamento**', c, true)
        .addField('🔫 **| Arma:**', armas)
        .addField('💭 **| Sobre mim**', sobremim)
        .setImage(image)

        message.channel.send(embed1)
    }

    else if(!['297153970613387264'].includes(member.id)) {

    let embedE = new Discord.MessageEmbed()
        .setTitle(`Perfil`)
        .setFooter(`use: imgperfil ou sobremim para personalizar`)
        .addField('💸 **| Carteira:**', `R$ ${money}`, true)
        .addField('💸 **| Banco:**', `R$ ${bank}`, true)
        .addField('🔆 **| Level:**', 'em breve..', true)
        .addField('💠 **| Duckets:**', duckets, true)
        .addField('💼 **| Profissão:**', emprego, true)
        .addField('💍 **| Relacionamento:**', c, true)
        .addField('🔫 **| Arma:**', armas)
        .addField('💭 **| Sobre mim:**', sobremim)
        .setImage(image)
        .setTimestamp()

        message.channel.send(embedE)
    }
}

  exports.help = {
    name: 'perfil',
    aliases: ['profile']
  }