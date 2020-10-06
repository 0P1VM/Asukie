const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'covid-19',
    aliases: ['covid'],
    run: async (client, message, args) => {
        let countries = args.join(" ");

        if(args[0] === "mundo"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Estatísticas COVID-19 mundial 🌎`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)
                .setColor('#8500de')
                .setThumbnail('https://images.vexels.com/media/users/3/193288/isolated/preview/b2a7f2fa70e9452b2f4ae832c1b651a2-covid-19-washing-hands-icon-by-vexels.png')
                .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Estatísticas COVID-19 no **${countries}**`)
                .addField('Caso Confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)
                .setColor('#8500de')
                .setThumbnail('https://images.vexels.com/media/users/3/193288/isolated/preview/b2a7f2fa70e9452b2f4ae832c1b651a2-covid-19-washing-hands-icon-by-vexels.png')
                .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('<a:errado:753245066965024871> **|** Esse Pais não existe ou não se encontra no meu banco de dados. [**Aviso:** O comando é em Inglês, então os Paises também são ex: ``Brazil, Japan`` etc]')
            })
        }
    }
}