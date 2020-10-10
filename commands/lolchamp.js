const Discord = require('discord.js')
const c = require('../config.json')
const lol = require('riot-lol')

module.exports = {
    name: 'lolchamp',
    aliases: ['campeao'],
	  run: async (client, message, args) => {

        const champ = args.join(" ")
        if(!champ) return message.reply(" **|** Escreva o campeão que você quer as informações.").then(msg => msg.delete({timeout: 35000}))
        lol.getChampion(champ).then(champion => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Campeão ${champ}`)
            .setDescription(champion.title)
            .addField("Tags", champion.tags)
            .addField("Descrição", champion.description)
            .addField("HP", champion.stats.hp)
            .addField("HP por Level", champion.stats.hpperlevel)
            .addField("Velocidade de movimento", champion.stats.movespeed)
            .addField("Armadura", champion.stats.armor)
            .addField("Armadura por Level", champion.stats.armorperlevel)
            .addField("Spell block", champion.stats.spellblock)
            .addField("Spell block por Level", champion.stats.spellblockperlevel)
            .addField("Range", champion.stats.attackrange)
            .addField("HP Regen", champion.stats.hpregen)
            .addField("AD", champion.stats.attackdamage)
            .addField("AD Por Level", champion.stats.attackdamageperlevel)
            .addField("Velocidade de ataque", champion.stats.attackspeed)
            .addField("ID", champion.key)
            .setThumbnail(champion.imageUrl)
            message.channel.send(embed).then(msg => msg.delete({timeout: 120000}))
            
        })
        .catch(e => {
            message.channel.send("Opa! " + e)
        })



    }
}