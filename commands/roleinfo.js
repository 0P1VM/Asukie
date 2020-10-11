const Discord = require('discord.js');

module.exports = {
    name: 'roleinfo',
    aliases: ['rinfo', 'ri'],
    run: async (client, message, args) => {

        

        const role = message.mentions.roles.first()  || message.guild.roles.cache.get(args[0])

        if(!role) return message.channel.send("Hey, i need a role to provide info about!")
        try {

        const Embed = new Discord.MessageEmbed()
        .setTitle(`Role info`)
        .addField("Nome", `${role.name}`, true)
        .addField("Criado há", `${role.createdAt}`)
        .addField("Cor", role.hexColor, true)
        .addField("Menção", role.mentionable, true)
        .addField("ID", `${role.id}`, true)
        .addField("aaa", `${role.hoist}`, true)
        .addField("Posição", `${role.position}`, true)

    message.channel.send(Embed)

        } catch (e) {
            console.log(e)
        }
    }
}