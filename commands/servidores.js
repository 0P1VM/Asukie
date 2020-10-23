
const Discord = require("discord.js");
const c = require('../config.json')

exports.run = async (client, message, args) => {
message.delete(); 

  let embedDev = new Discord.MessageEmbed()
    .setDescription("<:Asukie_atencao:766406396337193020> **|** Apenas meus desenvolvedores podem utilizar este comando!")
    .setColor(`#0f4bff`)

    if (!['719944880800923690', '268403900355313674', '752954404986159275'].includes(message.author.id)) {
    return message.channel.send(embedDev)
        .then(msg => msg.delete({ timeout: 10000}))
    
    }

    let string = '';
    client.guilds.cache.forEach(guild => {
        string += guild.name + '\n';
    });
    let botembed = new Discord.MessageEmbed()
        .setColor("#0f4bff")
        .addFields( {name: `<:Info_3:768616100593270794> ${client.user.username} | Servidores`, value: `${string}`})
        .setTimestamp()
        .setFooter("Comando Requisatado por: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed).catch(()=>{});
}