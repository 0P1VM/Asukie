const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js');

module.exports = {
    name: "daily",
    description: "Receba um bônus diário",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 0;
        let amount = Math.floor(Math.random() * 8438) + 1;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 1){
            let time = ms(timeout - (Date.now() - daily));
let a1 = new Discord.MessageEmbed()
.setTitle(`${message.author.tag}`)
.setDescription(`⏰ | Aguarde ** ${time.hours}h ${time.minutes}m ${time.seconds}s** para coletar o seu bônus novamente`);
            return message.channel.send(a1)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

        const embed = new Discord.MessageEmbed()
        .setTitle('Daily')
        .setDescription(`💵 | Você coletou **R$ ${amount}** do seu bônus diário.`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()

        await message.channel.send(embed);

        }
    }
}